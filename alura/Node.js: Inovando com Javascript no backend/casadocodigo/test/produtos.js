var http        = require('http');
var assert      = require('assert');
var express     = require('../config/config')();
var request     = require('supertest')(express);

describe('ProdutosController', function(){

  beforeEach(function(done){
    var con = express.infra.connectionDB();
    con.query('DELETE FROM livros', function(erro, result){
      if(!erro){
        done();
      }
    });
  });

  it('#listagem json com ASSERT', function(done){
    console.log('Teste de verificação da listagem do json');
    var configuracoes = {
                          host: 'localhost',
                          port: 3000,
                          path: '/produtos',
                          headers: {
                                    'Accept': 'application/json',
                          }
                        };
    http.get(configuracoes, function(response){
      assert.equal(response.statusCode, 200);
      assert.equal(response.headers['content-type'], 'application/json; charset=utf-8');
      done();
    });
  });
  it('#listagem json listagem com SUPERTEST', function(done){
    request.get('/produtos')
                            .set('Accept', 'application/json')
                            .expect('Content-type', /json/)
                            .expect(200, done);
  });

  it('#listagem json listagem com SUPERTEST', function(done){
    request.get('/produtos')
                            .set('Accept', 'text/html')
                            .expect('Content-type', /html/)
                            .expect(200, done);
  });

  it('#Cadastro novo produto com dados INVALIDOS', function(done){
    var produto = {
                    titulo: 'titulo',
                    descricao: 'descricao',
                  //  valor:    9,
    };
    request.post('/produtos')
                              .send(produto)
                              .expect(400, done);
  });

  it('#Cadastro novo produto com dados VALIDOS', function(done){
    var produto = {
                    titulo: 'titulo',
                    descricao: 'descricao',
                    preco:    9,
    };
    request.post('/produtos')
                              .send(produto)
                              .expect(302, done);
  });
});
