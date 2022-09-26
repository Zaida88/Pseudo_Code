
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const path = require('path')
var CryptoJS = require("crypto-js");

const orm = require('../databaseConfiguration/db_orm')
const sql = require('../databaseConfiguration/db_sql')
const helpers = require("./helpers");

passport.use(
	"local.signin",
	new LocalStrategy(
		{
			usernameField: "username",
			passwordField: "password",
			passReqToCallback: true
		},
		async (req, username, password, done) => {
			const rows = await orm.users.findOne({ where: { username: username } });
			if (rows) {
				const user = rows;
				const pass = await CryptoJS.AES.decrypt(user.password, 'secret');
				const validPassword = pass.toString(CryptoJS.enc.Utf8);
				if (validPassword == password) {
					done(null, user, req.flash("message", "Bienvenid@ "+ user.firstName));
				} else {
					done(null, false, req.flash("message", "Contraseña incorrecta"));
				}
			} else {
				return done(
					null,
					false,
					req.flash("message", "El nombre de usuario no existe.")
				);
			}
		}
	)
);

passport.use(
	"local.signup",
	new LocalStrategy(
		{
			usernameField: "username",
			passwordField: "password",
			passReqToCallback: true
		},
		async (req, username, password, done) => {
			const users = await orm.users.findOne({ where: { username: username } });
			if (users === null) {
				const { idUser, firstName, lastName, email } = req.body
				let newUser = {
					idUser: idUser,
					firstName,
					lastName,
					email,
					username: username,
					password: password
				};
				newUser.firstName = await helpers.encryptPassword(firstName);
				newUser.lastName = await helpers.encryptPassword(lastName);
				newUser.email = await helpers.encryptPassword(email);
				newUser.password = await helpers.encryptPassword(password);
				const result = await orm.users.create(newUser);

				if (idUser === '1') {
					await sql.query('INSERT INTO roles(idRol, nameRol) VALUE ("1", "ADMIN")')
					await sql.query('INSERT INTO permissions(idPermission, namePermission) Values ("1","TOTAL")')
					await sql.query('INSERT INTO user_roles(idUserRol, userIdUser, roleIdRol, permissionIdPermission) VALUE("1",?,"1","1")', [idUser])
				}

				newUser.id = result.insertId;

				const photo = req.files.photo
				const validation = path.extname(photo.name)

				const extension = [".PNG", ".JPG", ".JPEG", ".GIF", ".TIF", ".png", ".jpg", ".jpeg", ".gif", ".tif"];

				if (!extension.includes(validation)) {
					req.flash("success", "Imagen no compatible.")
				}

				if (!req.files) {
					req.flash("success", "Imagen no ingresada.")
				}

				const location = __dirname + "/../public/img/user/" + photo.name;

				photo.mv(location, function (err) {
					if (err) {
						return req.flash("message", err)
					}
					sql.query("UPDATE users SET photo = ? WHERE idUser = ?", [photo.name, idUser])
					console.log("Imagen ingresada")
				})
				return done(null, newUser);
			}
		}
	)
);

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
}); 