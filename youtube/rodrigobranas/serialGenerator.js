var config = require('./config');

var createSerialGenerator = function(){
  //var max = 10000;
  var _generate = function(){
    return Math.floor(Math.random() * config.max);
  };
  return {
    generate: _generate,
  };

};

// Sobreesreve ABAIXO
module.exports = createSerialGenerator();
// IGUAL A
  //exports        =  createSerialGenerator();
// IGUAL A
  //this           =  createSerialGenerator();
