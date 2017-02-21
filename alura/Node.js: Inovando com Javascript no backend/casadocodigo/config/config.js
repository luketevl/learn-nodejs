var express      = require('express');
var load         = require('express-load');
var bodyParser   = require('body-parser');
var validator    = require('express-validator');


module.exports = function (){
  var app      = express();
  app.set('view engine', 'ejs');
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(validator());
  app.use(express.static('./app/public'));
  load('routes', {cwd: 'app'}).then('infra').into(app);

  app.use(function(request, response, next){
    response.status(404).render('erros/404');
    next();
  });
  app.use(function(error, request, response, next){
    if(process.env.NODE_ENV === 'production'){
      response.status(500).render('erros/500');
      return ;
    }
    next(error);
  });
  return app;
};
