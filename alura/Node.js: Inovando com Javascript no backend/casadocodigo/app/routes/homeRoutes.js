module.exports = function(app){
  app.get('/home', function(request, response){
    console.log('Home');
    var con           = app.infra.connectionDB();
    var produtosBanco = app.infra.produtosBanco(con);
    produtosBanco.lista(function(erro, results, next){
      console.log(erro);
      if(erro){
          return next(erro);
      }
      response.format({
        html: function(){
            response.render('home', {livros: results});
        },
        json: function(){
          response.json(results);
        }
      });

    });
    con.end();
  });
};
