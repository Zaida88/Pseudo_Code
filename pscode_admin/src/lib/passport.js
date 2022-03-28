const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const orm = require('../configuracion_bd/bd_orm')
const sql = require('../configuracion_bd/bd_sql')
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
      const rows = await orm.usuarios.findOne({ where: { username: username } });
      if (rows) {
        const user = rows;
        const validPassword = await helpers.matchPassword(
          password,
          user.password
        );
        if (validPassword) {
          done(null, user, req.flash("message", "Bienvenid@" + " " + user.username));
        } else {
          done(null, false, req.flash("message", "Datos incorrectos"));
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
      emailField: "email",
      nombre_completoField: "nombre_completo",
      passReqToCallback: true
    },
    async (req, username, password,done) => {
      const usuarios = await orm.usuarios.findOne({ where: { username: username } });
      if (usuarios === null) {
        const {email,nombre_completo} = req.body
        let nuevoUsuario = {
          username,
          password,
          email,
          nombre_completo
        };
        nuevoUsuario.password = await helpers.encryptPassword(password);
        const resultado = await orm.usuarios.create(nuevoUsuario);
        nuevoUsuario.id = resultado.insertId;
        return done(null, nuevoUsuario);
      } else {
        if (usuarios) {
          const usuario = usuarios
          if (username == usuario.username) {
            done(null, false, req.flash("message", "El nombre de usuario ya existe."))
          } else {
            const {email,nombre_completo} = req.body
            let nuevoUsuario = {
              username,
              password,
              email,
              nombre_completo
            };
            nuevoUsuario.password = await helpers.encryptPassword(password);
            const resultado = await orm.usuarios.create(nuevoUsuario);
            nuevoUsuario.id = resultado.insertId;
            return done(null, nuevoUsuario);
          }
        }
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