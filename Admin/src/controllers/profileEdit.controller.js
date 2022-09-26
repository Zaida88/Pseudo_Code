const express = require('express');
const exphbs = require('express-handlebars'); 
const fileUpload = require('express-fileupload');
const mysql = require('mysql');

const app = express();



app.use(fileUpload());


app.use(express.static('public'));
app.use(express.static('upload'));


const handlebars = exphbs.create({ extname: '.hbs',});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');





app.get('', (req, res) => {
    connection.query(' photo from users where idUser = ?', [ids] , (err, rows) => {
      if (!err) {
        res.render('/user_profile/profile_edit', { rows });
      }
    });
});


app.post('', (req, res) => {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }


  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + '/upload/' + sampleFile.name;

  console.log(sampleFile);


  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

      connection.query('UPDATE user SET profile_image = ? WHERE id ="?"', [ids] [sampleFile.name], (err, rows) => {
        if (!err) {
          res.redirect('/');
        } else {
          console.log(err);
        }
      });
    });
});
module.exports = app;