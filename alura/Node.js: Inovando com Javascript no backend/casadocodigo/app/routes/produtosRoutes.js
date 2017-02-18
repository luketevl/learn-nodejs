module.exports = function(app){
  var listaProdutos = function(request, response, next){
    var con           = app.infra.connectionDB();
    var produtosBanco = app.infra.produtosBanco(con);
    produtosBanco.lista(function(err, results){
      if(err){
          return next(err);
      }
      response.format({
        html: function(){
            response.render('produtos/lista', {lista: results});
        },
        json: function(){
          response.json(results);
        }
      });

    });
    con.end();
  };

  app.get('/produtos', listaProdutos);

  app.get('/produtos/form', function(request, response){
    response.render('produtos/form', {errosValidation: ''});
  });

  app.post('/produtos', function(request, response){
    var con           = app.infra.connectionDB();
    var produtosBanco = app.infra.produtosBanco(con);
    var produto       = request.body;
    request.assert('titulo', 'é obg').notEmpty();
    request.assert('preco', 'numero deve ser valido').isFloat();
    var errosValidation = request.validationErrors();
    if(!errosValidation){
      console.log(produto);
      produtosBanco.salvar(produto, function(erro, results){
        console.log(erro);
        response.redirect('/produtos');
      });
    }
    else{
      response.format({
        html: function(){
            response.status(400).render('produtos/form',  {errosValidation: errosValidation, produto: produto});
        },
        json: function(){
          response.status(400).json({errosValidation: errosValidation, produto: produto});
        }
      });
    }
  });

  app.delete('/produtos', function(request, response){
    var con           = app.infra.connectionDB();
    var produtosBanco = app.infra.produtosBanco(con);
    var produto       = request.body;
    produtosBanco.deletar(produto, function(erro, results){
      response.redirect('/produtos');
    });
  });

};
