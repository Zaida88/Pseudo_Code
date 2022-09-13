const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "pscode";

mysql.createConnection({
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
}).then(connection => {
  connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
    console.info("Base de datos creada o comprobada correctamente");
  })
})

//models
const testsModels= require("../models/testsModels")
const questionsModels= require("../models/questionsModels")
const answersModels= require("../models/answersModels")



const projects= require("../models/projects")
const objectives= require("../models/objectives")
const users= require("../models/users")

const sequelize = new Sequelize(
  'pscode',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conectó')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("Tablas sincronizadas")
  })

//asyng
const tests= testsModels(sequelize,Sequelize)
const questions= questionsModels(sequelize,Sequelize)
const answers= answersModels(sequelize,Sequelize)

//relation
tests.hasMany(questions)
questions.belongsTo(tests)

questions.hasMany(answers)
answers.belongsTo(questions)


module.exports = {
  tests,
  questions,
  answers
  //
}