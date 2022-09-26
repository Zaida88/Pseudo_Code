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
const testsModel= require("../models/tests.model")
const questionsModel= require("../models/questions.model")
const answersModel= require("../models/answers.model")
const projectsModel= require("../models/projects.model")
const objectivesModel= require("../models/objectives.model")
const usersModel= require("../models/users.model")
const classificationsModel= require("../models/classifications.model")
const languagesModel= require("../models/languages.model")
const codesModel= require("../models/codes.model")
const clientsModel= require("../models/clients.model")
const exercisesModel= require("../models/exercises.model")
const permissionsModel= require("../models/permissions.model")
const recoverPasswordsModel= require("../models/recoverPasswords.model")
const rolesModel= require("../models/roles.model")
const userRolesModel= require("../models/userRoles.model")
const scoresModel= require("../models/scores.model")
const weeklyRankingsModel= require("../models/weeklyRankings.model")

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

//async
const users= usersModel(sequelize,Sequelize)
const tests= testsModel(sequelize,Sequelize)
const questions= questionsModel(sequelize,Sequelize)
const answers= answersModel(sequelize,Sequelize)
const projects= projectsModel(sequelize,Sequelize)
const objectives= objectivesModel(sequelize,Sequelize)
const classifications= classificationsModel(sequelize,Sequelize)
const languages= languagesModel(sequelize,Sequelize)
const codes= codesModel(sequelize,Sequelize)
const clients= clientsModel(sequelize,Sequelize)
const exercises= exercisesModel(sequelize,Sequelize)
const permissions= permissionsModel(sequelize,Sequelize)
const recoverPasswords= recoverPasswordsModel(sequelize,Sequelize)
const roles= rolesModel(sequelize,Sequelize)
const userRoles= userRolesModel(sequelize,Sequelize)
const scores= scoresModel(sequelize,Sequelize)
const weeklyRankings= weeklyRankingsModel(sequelize,Sequelize)

//relation
users.hasMany(tests)
tests.belongsTo(users)

tests.hasMany(questions)
questions.belongsTo(tests)

questions.hasMany(answers)
answers.belongsTo(questions)

users.hasMany(projects)
projects.belongsTo(users)

projects.hasMany(objectives)
objectives.belongsTo(projects)

users.hasMany(classifications)
classifications.belongsTo(users)

users.hasMany(languages)
languages.belongsTo(users)

classifications.hasMany(languages)
languages.belongsTo(classifications)

users.hasMany(codes)
codes.belongsTo(users)

languages.hasMany(codes)
codes.belongsTo(languages)

codes.hasMany(exercises)
exercises.belongsTo(codes)

users.hasMany(recoverPasswords)
recoverPasswords.belongsTo(users)

users.hasMany(userRoles)
userRoles.belongsTo(users)

clients.hasMany(scores)
scores.belongsTo(clients)

exercises.hasMany(scores)
scores.belongsTo(exercises)

scores.hasMany(weeklyRankings)
weeklyRankings.belongsTo(scores)

roles.hasMany(userRoles)
userRoles.belongsTo(roles)

permissions.hasMany(userRoles)
userRoles.belongsTo(permissions)

module.exports = {
  users,
  tests,
  questions,
  answers,
  projects,
  objectives,
  classifications,
  languages,
  codes,
  clients,
  exercises,
  permissions,
  recoverPasswords,
  userRoles,
  roles,
  scores,
  weeklyRankings
}