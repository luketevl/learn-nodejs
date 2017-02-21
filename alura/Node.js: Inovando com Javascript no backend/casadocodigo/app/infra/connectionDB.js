var bd  = require('mysql');

var createDBConnection = function(){
  var con ={};
  console.log(process.env.NODE_ENV);
  if(!process.env.NODE_ENV){
    con = bd.createConnection({
                                host:     "localhost",
                                user:     "root",
                                password: "root",
                                database: "casadocodigo_no dejs",
    });
  }
  else if(process.env.NODE_ENV == 'test'){
    con = bd.createConnection({
                                host:     "localhost",
                                user:     "root",
                                password: "root",
                                database: "casadocodigo_dev_nodjs",
    });
  }
  return con;
}

// WRAPPER
module.exports = function(){
  return createDBConnection;
};
