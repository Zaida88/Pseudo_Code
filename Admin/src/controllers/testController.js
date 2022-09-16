const test ={}

const orm = require("../databaseConfiguration/bd_orm")
const sql = require("../databaseConfiguration/bd_sql")
const objectives = require("../models/objectivesModel")

test.enviar = async (req, res) => {
    const id = req.user.iduser
    const { name, description, idTest, unic, numbers } =
      req.body
    const newtest = {
      name,
      description, 
      userIduser: id,
    }
    await orm.tests.create(newtest);

    if (parseInt(numbers) === 1) {
      await sql.query(
        "insert into test_detail (tests,testIdTest) values (?,?)", [unic, parseInt(idTest)]
      ); 
    } else {
      if (parseInt(numbers) > 1) {
        for (let i = 0; i < objectives.length; i++) {
          await sql.query(
            "insert into  test_detai (tests,testIdTest) values (?,?)", [objectives[i], parseInt(idTest)]
          );
        }
      }
    }
    req.flash("success", "Guardado Exitosamente");
    res.redirect("/test/listar/" + id);
  }
  module.exports= test