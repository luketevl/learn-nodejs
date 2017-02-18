* CONTEUDO
  = Comandos node
    = node arquivo.js - Roda o arquivo

  = Funcoes
    = var http = require('http') - Importa MODULOS, ARQUIVOS
    = var http = require('http').Server(express) - NOSSA CUSTOM CUSTOMIZADA PARA TRATAR REQUISICOES NO CASO EXPRESS
    = var servidor = http.createServer(function(req, response){ -  CRIA SERVIDOR, parametro FUNCAO cria requisicao e da resposta.

      });
        = response.end(); - Exibe a resposta.
        = request.url; - Pega a URL
    = servidor.listen(porta, host) - Escuta o servidor
    = var express = require('express') - Importa MODULOS, ARQUIVOS
    = var load = require('express-load') - CARREGA BILBIOTECAS AUTOMATICAS
      = load(pasta) - PROCURA em TODAS as pastas
      = load(pasta, {cwd: 'pastas'}) - PROCURA em ALGUMAS pastas
      = load(pasta).into(app); - TUDO carrregado AUTOMATICAMENTE vai para dentro do APP
      = var con = app.config.db(); - USAR nomepasta.nomearquivo;
    = var app = express() - INVOCA O EXPRESS
    = var app = app.set('view engine', nomeEngine) - DEFINIR VARIAVEIS para dentro do
    = var app = app.use(bodyParser.urlencoded({extended: true}) - Seta o TRATAMENTO de REQUISIÇÃO do BODY
    = var app = app.use(bodyParser.json()) - Seta o TRATAMENTO de REQUISIÇÃO do BODY COM JSON - middleware
    = var app = app.use(validator()) - Seta o VALIDADOR DE REQUICISOES middleware
    = app.use(express.static('public')); - Define arquivos ESTATICOS - middleware
    = app.use(function(request, response, next){
        response.statusCode(404, next());
      }); - Para ROTAS cria uma página quando NAO ENCONTRADO, tipo 404
    = app.set('views', './app/views'); - TROCA  LUGAR onde o EXPRESS vai buscar as views
    = app.listen(porta, servidorPronto); - Escuta o SERVIDOR
    = app.get(nome, function(request, response, next){}); - RESPOSTAS E REQUICISOES DO SERVIDOR
        = next - USADO APRA O EXPRESS CONTINUAR SUA CADEIA DE FUNCAO
          next(erros);
        = response.send(); - RESPONDE PARA O CLIENTE
        = response.render(local/arquivo); - RESPONDE PARA O CLIENTE
        = response.render(local/arquivo, variaveis); - RESPONDE PARA O CLIENTE COM VARIAVEIS
        response.status(code).render(local/arquivo); - RESPONDE PARA O CLIENTE COM STATUS HTTP
        = response.format({html: funtion(), json: function(){}}); - RESPONDE PARA O CLIENTE DE ACORDO COM OQUE ELE PEDIU(headers)
    = app.get(configuracoes, function(response){}); - FAZ CHAMADA PRA SERVIDOR e OBTEM RESPOSTA DO SERVIDOR
        = response.on('data', function(body){};) - VER CORPO DA RESPOSTA, QUANDO TIVER RESPOSTA(data) retorna o COPOR(body)
        = response.statusCode - status da requisicao
        = var cliente = app.request(configuracoes, function(response){}); - recebe um CLIENTE, ENVIA DADOS FAZ CHAMADA PRA SERVIDOR e OBTEM RESPOSTA DO SERVIDOR
          = cliente.end(); - FECHA COMUNICACAO, DISPARA COMUNICACAO
    = module.exports = function(){}; - COMMON JS , FUNCAO QUE RETORNA ao dar REQUIRED
    = var con =  mysql.createConnection({host, user, password, databse}); - CRIA CONEXAO com o BANCO DE DADOS
    = con.query('query', function(erro, results){}); - Executa consulta SQL
    = con.end(parametros); - FECHA CONEXAO COM BANCO
    = response.redirect(lugar); - Redireciona
    = var validator = request.assert(campo, msg) - VALIDACAO, RESPOSTA OBJETO DE VALIDACAO
      = validator.notEmpty(); - FUNCAO VAZIO
    = var erros = validationErrors(); - RETORNA TODOS OS ERROS

    = describle(nomeTeste, function(){casosDeTestes}); - DESCREVE O CENARIO
      = it('#listagem json', function(done){
        // testa tudo e no final colocar
        done();
        }); - Do macro cenaro cria uma microcenario de teste
      = beforeEach(function(done){

        }); - ANTES DOS ITs
    = var assert = require('assert');
      = assert.equal(e,e2) - VALIDA SE EH IGUAL
    = var supertest = require('supertest')(servidor); - POSSIBILITA PASSAR A REQUISICAO, no caso express
      = supertest.get(link)
        = .set('Accept', 'application/json')  - pode setar outras configuracoes a requisição
        = .expect('Content-type', /json/);    -  ESPERA QUE A RESPOSTA POSSA SER algo
        = .expect(200, done);    -  ESPERA QUE A RESPOSTA DO CODIGO DA REQUISICAO, PADRAO QUANDO NAO PASSA NADA.
      = supertest.post(link)
        = .send(dados); - envia dados
      = socketio - IMPORTAR ELE NO HTML
        = FRONT END
          = var socket = io(); - COMUNICA COM O SERVIDOR
            = socket.on('novaResposta', function(data){
              alert("Livro em promocao "+data.livro.id);
              }); - QUNDO TIVER UMA NOVA RESPOSTA DO SERVIDOR
        = BACK END
          = var io = require('socket.io')(http);
          = app.set('io', io); - TORNA GLOBAL
          = app.get('io').emit('novaResposta', dados); - MANDA AVISO PARA QUEM TIVER ESCUTANDO SOCKETIO


  = Bibliotecas
    = http   - Criar servidor WEB
    = assert - VALIDACOES e joga exception (melhor usar o supertest)
    = express - FrameWork
    = express-load - FrameWork EXPRESS para carregar MODULOS automatico
    = express-validator - FrameWork EXPRESS para VALIDAR
    = body-parser - PEGA PARSER e PREENCHE a propriedade .body do REQUEST
    = mysql - Banco de dados
    = socketio - Implementar protocolo WEBSOCKET no servidor
    = mocha - DEV teste de integracao
    = supertest - DEV facilitar escrita do teste

* OBSERVACOES
  = express - FrameWork para ajudar a tratar requisicoes
    = SE NAO SETAR O AMBIENTE VAI SER SEMPRE DESENVOLVIMENTO
    = process.env.NODE_ENV = SETA AMBIENTE
    = process.env.PORTA = SETA PORTA
  = NPM gerenciador de pacote para javacript
  = npm init - CONFIGURA O PROJETO
  = npm install PACOTE --save / Baixa pacote e SALVA no package.json
  = npm install PACOTE --save-dev / Baixa pacote e SALVA no package.json e USA APENAS EM DESENVOLVIMENTO
  = express.use(); - SERVE PARA COLOCAR SUAS FUNCOES NO Fluxo de execução do express
  = express REQUIRE retorna uma funcao nao inicializada, deve ser invocada express();
  = app.get - CRIA ROTAAAS com GET
  = app.post - CRIA ROTAAAS com POST
    = request.body - CONTEUDO do POST, pelo express
  = (EJS) EMBEDDEDJJS -  Escrever código JS junto com html, PAGINAS DINAMICAS
    = TEM que criar a PASTA VIEWS
  = express eh INTEGRADO com MECANISMOS DE PAGINAS DINAMICAS
  = nodemon - Fica vigiando e sobe de novo a aplicacao
    = npm install -g nodemon / -g GLOBAL
    = nodemon app.js (SOBE SERVIDOR)
  = ORGANIZACAO
    = Usar o MODULE.EXPORTS uma unica vez, assim ele carrega uma vez, codigo de definicao fica fora.
    = Pasta APP app.js SOBE O SERVIDOR
    = CAMINHOS RELATIVOS sao de ONDE o SERVIDOR começou a RODAR
  = CARREGAR ROTA AUTOMATICA, ordem IMPORTA
  = WRAPPER FUNCAO que encapsula outra funcao
    = usar quando nao quero que EXECUTE automaticamente ALGO, exemplo banco de dados
  = MIDDLEWARE - Funcoes antes de chegar a requisição
    = ORDEM IMPORTA, então CUIDADO
  = DEPOIS DO POST USAR REDIRECT retorna um codigo 302
  = BOA PRATICA Usar os VERBOS HTTP para definir a ação, GET LISTA, POST salva. ENDERECO + VERBO
  = CONTENT NEGOTIATIONS
    = CLIENTE pode colocar no header das configuracoes que ele quer um TIPO determinado 'Accept': 'application/json'
    = app.request(configuracoes, function) - apenas MONTA O OBJETO envia dados setar method: post nas configuracoes
      = pode colocar no header das configuracoes que ele quer ENVIAR um TIPO determinado 'Content-Type': 'application/json'

  = TESTE DE integracao
    = node_modules/mocha/bin/mocha - RODA SCRIPT DE TESTES
    = NODE_ENV=test node_modules/mocha/bin/mocha - RODA SCRIPT DE TESTES, SETANDO O ENVORINMENT
    = busca por padrao pasta TEST
    = REQUIRE já eh automatico pelo SCRIPT DO mocha
    = ao descrever IT coloca o #nome
    = forma ASSINCRONA passar no it(nome, function(done))

  = WEBSOCKET
    = COMUNICACAO de MAO DUPLA entre servidor e cliente
    = ao INSTALAR ele ja cria uma ROTA para o arquivo necessário para incluir nas paginas
      = /socket.io/socket.io.js
    = no REQUIRED passar o http
      = fazer o http usar o express EXEMPLO require('http').Server(express);

  = Deploy
    = Site heroku | PARA APPLICACAO
      = heroku app:create "nomedoAPP"   | CRIA APP
      = heroku addons:create cleardb:ignite | Cria bacno de dados
      = heroku config | MOSTRA Variaveis de AMBIENTE
    = Site cleardb  | PARA BANCO DE DADOS
    = package.json | inserir nos SCRIPTS "start": "node app"
    = package.json | inserir  propriedade "engine":{ "node": "versao"}


* ENTENDENDO
  = module - Ver arquivo nodeModuleCarregamento
  = callback
    = LIBERA o processador
    = query fica pronta, ele volta com o resultado
    Existe uma função interna do Node.js que recebe um path do módulo a ser carregado.
    Essa função procura pelo local do módulo de acordo com o formato do path.

    Para conseguir carregar a função do módulo, ele cria uma função com um nome do tipo funcaoDeCarregamento ou algo assim, que recebe uma função anônima e dentro dessa função, invoca a função eval() do JavaScript passando como parâmetro o que foi carregado do módulo a partir do path recebido.

    Pronto! Agora o código está carregado.

    Para que ele fique visível de fora, é disponibilizado um objeto chamado module ou algo do tipo, que contém um objeto exports onde ficam armazenados todos os paths passados.

    Por fim a funcaoDeCarregamento é invocada recebendo como parâmetro os próprios objetos module e module.exports e é retornado o objeto module.

    Essa é a maneira escolhida pelo Node.js para fazer carregamento dinâmico de módulos JavaScript. Outros frameworks podem fazer de formas diferentes.

    Uma convenção que ajuda a padronizar essa estratégia é a CommonJS, que como já vimos, define várias Especificações para código JavaScript.
