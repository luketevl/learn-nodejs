module.exports = function(){
  return function(connection){
    var _lista = function(callback){
      connection.query('SELECT * FROM livros', callback);
    };
    var _salvar = function(produto, callback){
      connection.query('INSERT INTO livros set ?',produto, callback);
    };
    var _deletar = function(produto, callback){
      connection.query('DELETE FROM livros where id= ?',produto.id, callback);
    };
    return {
      lista: _lista,
      salvar: _salvar,
      deletar: _deletar,
    };

  };
};
