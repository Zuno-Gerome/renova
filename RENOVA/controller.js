var con = require('./conexionbd');


function obtenerListas(req,res){
    var sql="SELECT * from agrupaciones";
    con.query(sql,function(error,resultado,fields){
          if (error) {
                console.log("Hubo un error en la consulta", error.message);
                return res.status(500).send("Hubo un error en la consulta");
          }
          res.send(JSON.stringify(resultado));
    })
};

function obtenerListaFram(req,res){
    var sql="SELECT * from listaFram";
    con.query(sql,function(error,resultado,fields){
          if (error) {
                console.log("Hubo un error en la consulta", error.message);
                return res.status(500).send("Hubo un error en la consulta");
          }
          res.send(JSON.stringify(resultado));
    })
};

module.exports ={
    obtenerListas:obtenerListas,
    obtenerListaFram:obtenerListaFram
}