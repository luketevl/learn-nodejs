module.exports = function(app){

  app.get('/promocoes/form', function(request, response, next){
    console.log('promocoes form');
    var con           = app.infra.connectionDB();
    var produtosBanco = app.infra.produtosBanco(con);
    produtosBanco.lista(function(erro, results){
      console.log(erro);
      if(erro){
          return next(erro);
      }
      response.format({
        html: function(){
            response.render('promocoes/form', {lista: results});
        },
        json: function(){
          response.json(results);
        }
      });

    });
    con.end();
  });

  app.post('/promocoes', function(request, response){
    var dados_promocao = request.body;
    console.log(dados_promocao);
    app.get('io').emit('novaResposta', dados_promocao);
    response.redirect('/promocoes/form');

  });
};
