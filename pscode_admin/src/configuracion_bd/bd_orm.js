const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "pscode";

mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user     : process.env.DB_USER || "root",
    password : process.env.DB_PASSWORD || "",
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Base de datos creada o comprobada correctamente");
    })
})

const modelousuario= require ("../modelos/usuarios")
const modeloestructura= require ("../modelos/estructura")
const modelodetalle_proyecto= require ("../modelos/detalle_proyecto")
const modelodetalle_estrucctura= require ("../modelos/detalle_estrucctura")
const modelodatos_proyecto= require ("../modelos/datos_proyecto")
const modelocodificacion= require ("../modelos/codificacion")
const modelocliente= require ("../modelos/cliente")
const modeloclasificacion_lenguaje= require ("../modelos/clasificacion_lenguaje");

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
    console.log('No se conecto')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("Tablas sincronizadas")
  })

const usuarios = modelousuario(sequelize,Sequelize)
const estructura = modeloestructura(sequelize,Sequelize)
const detalle_proyecto = modelodetalle_proyecto(sequelize,Sequelize)
const detalle_estrucctura = modelodetalle_estrucctura(sequelize,Sequelize)
const datos_proyecto = modelodatos_proyecto(sequelize,Sequelize)
const codificacion = modelocodificacion(sequelize,Sequelize)
const cliente = modelocliente(sequelize,Sequelize)
const clasificacion_lenguaje = modeloclasificacion_lenguaje(sequelize,Sequelize)

usuarios.hasMany(estructura)
estructura.belongsTo(usuarios)

usuarios.hasMany(codificacion)
codificacion.belongsTo(usuarios)

usuarios.hasMany(clasificacion_lenguaje)
clasificacion_lenguaje.belongsTo(usuarios)

usuarios.hasMany(datos_proyecto)
datos_proyecto.belongsTo(usuarios)

cliente.hasMany(detalle_estrucctura)
detalle_estrucctura.belongsTo(cliente)

estructura.hasMany(detalle_estrucctura)
detalle_estrucctura.belongsTo(estructura)

datos_proyecto.hasMany(detalle_proyecto)
detalle_proyecto.belongsTo(datos_proyecto)

module.exports = {
 usuarios,
 estructura,
 detalle_proyecto,
 detalle_estrucctura,
 datos_proyecto,
 codificacion,
 cliente,
 clasificacion_lenguaje,

}