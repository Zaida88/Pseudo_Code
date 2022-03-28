const indexCtl = {};

const sql= require('../configuracion_bd/bd_sql')

indexCtl.mostrar = (req, res) => {
    res.render("index")
};

module.exports = indexCtl