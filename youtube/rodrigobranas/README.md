# VIDEOS
## 1 - Introdução

### COMPONENTES
  - eventloop - SINGLE THREAD

### BLIBLIOTECAS
  - libuv - Multiplatforma responsavel pelo I/O ASSINCRONO(event loop e thread pool)

### OBSERVACOES
  - eventloop - SINGLE THREAD
  - NODE.JS process TUDO em ma UNICA THREAD usando o event loop
  - SINGLE THREAD - Um PROCESSO de cada VEZ
  - THREAD POOL - Processamento do i/o (ESCALANDO PROCESSOS)
  - V8 ENGINE de interpretação JAVASCRIPT de alta performance
  - REPL READ EVAL PRINT LOOP - USAR PELO TERMINAL digitando "node"


## 2 - Sistema de Módulos

### COMPONENTES

### BLIBLIOTECAS

### FUNCOES
  - require() | Retornar o que foi EXPORTADO de um outro módulo
    - USA CACHE ou seja carrega apenas uma unica vez

### OBJETOS
  - module.exports.  | DEFINE oque do MODULO pode ser usado EXTERNAMENTE, apontam mesmo referencia, PAI
    - exports.         | DEFINE oque do MODULO pode ser usado EXTERNAMENTE, apontam mesmo referencia, CUIDADO se usar PAI VAI SOBREESCREVER
  - this.            | DEFINE oque do MODULO pode ser usado EXTERNAMENTE, apontam mesmo referencia, CUIDADO se usar PAI VAI SOBREESCREVER

### OBSERVACOES
  - Usa o COMMONJS
  - INDEX.js conhecido no node ao usar um modulo
  - TUDO dentro do MODULO é PRIVADO
  - Apenas MODULE.EXPORTS é o PAI de todos
  - required | Busca sempre primeiro um CODE MODULE, OU SEJA CUIDADO NOME DO MODULO
    - se NAO PASSAR caminho relativo ou absoluto ele busca na PASTA NODE_MODULES
    - Se nao INCOVAR o Metodo ele FOGE do CACHE
  - NUNCA COMITAR a pasta NODE_MODULES



## 3 - Global Objects

### FUNCOES
  - Object.keys() | Mostra apenas as chaves

### OBJETOS
  - global ou GLOBAL ou root ou sem indicar o VAR| Objeto GLOBAL

### OBSERVACOES
  -  TUDO dentro do MODULO é PRIVADO
  -  CUIDADO nao POLUIR OBJETO GLOBAL
  -  EXPORTS, required são pertencentes ao MODULO e nao GLOBAL
  -  DECLARA A variavel GLOBAL ao USAR pode usar apenas o NOME
  -  usar SEM O VAR variavel vira GLOBAL
  -  CRIE UM MODULO e faça variaveis que podem ser utilizadas em varios locais


## 4 - TIMERS

### FUNCOES
  - var t = setTimeout | Execute funcao apos determinado tempo.
    - clearTimeout(t) | CANCELA o timeout
    - setInterval() | AGENDAMENTO
    - clearInterval | AGENDAMENTO de cancelamento
  - setImmediate() | Agendamento na HORA

### OBJETOS

### OBSERVACOES
  - Usado para agendar funcoes
  - O resto executa e DEPOIS o setTimeout RODA
  - EVENT LOOP -> Executa uma unica thread e fica com o resto na FILA


## 4 - PROCESS

### FUNCOES

### OBJETOS
  - process | Processos do NODE
    - process.argv | Parametros utilizados na linha de comando

### OBSERVACOES

## 6 - CORE MODULES NET

### MODULOS
  - **Net** | Modulo para implementar o protocolo -TCP-
```javascript
const net = require('net');
```
### FUNÇÕES
  - **Cria** um _server_
```javascript
net.createServer();
```
  - **Listenner** para um _server_
```javascript
  net.createServer(function(connection){

  });
```
  - **Escreve** para o _client_ do _server_
```javascript
  net.createServer(function(connection){
    connection.write('Hello, I am the server');
  });

```
  - **Ouve** um _server_
```javascript
  net.createServer().listen(PORT);
```

  - **Cria** um _client_
```javascript
  const client = net.connect([OBJECT|PORT]);
```
  - **Envia** dados para a camada _tcp_
```javascript
  const client = net.connect([OBJECT|PORT]);
  client.write(data);
```

### EVENTOS
  - **DATA** | Detectar recebimento da dados vindos da _connecton_ (client or server).
```javascript
  client.on('data', function(data){
   data.toString();
  });
```
  - **CONNECT** | Detectar quando **client** conseguiu se conectar no _server_
```javascript
  client.on('connect', function(){

  });
```

  - **END** | Detectar evento de _fim_
```javascript
  client.on('end', function(){

  });
```
### OBSERVACOES
  - Modulo **NET** pode implementar todos os protocolos -TCP-
  - **TCP** | Controla o _processo_ de -transmissão de dados- (perda, duplicação e ordenação).
   - Protocolo de transmissão
   - Bi-direcional
   - Fica na camada de transporte
  - **CLIENT** deve ficar _escutando_ os **EVENTOS** do _server_
  - **EVENTS**
   - **DATA** | Dados vão em _BUFFER_
    - Usar **toString** ou encode
  - **BUFFER** == _array de bytes_

## 7 - CORE MOODULES HTTP | ## 8 - CORE MOODULES HTTP

### MODULOS
- **http** | Modulo para implementar requisições _HTTP_
```javascript
const http = require('http');
```

### FUNÇÕES
- **CREATE SERVER**
```javascript
http.createServer(callback(req, res));
```
- **LISTEN SERVER**
```javascript
http.createServer().listen(port);
```
- **ESCREVER NO CORPO DA RESPOSTA** _.write()_
```javascript
http.createServer((req, res) => {
  res.write('<html><head><title>page</title></head><body><h1>ola</h1></body></html>');
}).listen(port);
```
- **TERMINA RESPOSTA** _.end()_
```javascript
http.createServer((req, res) => {
  res.end();
}).listen(port);
```
- **SETA HEADER** _.setHeader()_
```javascript
http.createServer((req, res) => {
  res.setHeader(key, value);
  res.end();
}).listen(port);
```
- **GET URL** _.url_
```javascript
http.createServer((req, res) => {
  req.url;
}).listen(port);
```
- **GET METHOD REQUEST** _.method_
```javascript
http.createServer((req, res) => {
  req.method;
}).listen(port);
```

### EVENTOS
- **DATA** | Detectar recebimento da dados vindos da _connecton_ (client or server).
```javascript
client.on('data', function(chunk){
 array.push(chunk);
});
```

### OBSERVACOES
- **CORS** | Antigamente era usado o **jsonp**
  - https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
```javascript
http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end();
}).listen(port);
```
- **PREFIGHT** | começo de uma transmissão, que seria em partes
  - **OPTION**
    - Vai sempre **antes** do **POST**
