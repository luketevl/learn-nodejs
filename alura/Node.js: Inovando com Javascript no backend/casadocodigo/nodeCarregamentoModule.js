function require(path){
  var codidoDoSeuModulo = carregado(path);
  var funcaoCarregamento = function(){
    eval(codigoDoSeuModulo);
  };
  var module = {
                  exports: {}
                };
        funcaoCarregamento(module, module.exports);
};
