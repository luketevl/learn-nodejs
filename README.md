# LINKS
- https://nodejs.org/en/
- http://blog.caelum.com.br/hipermidia-e-contratos-dinamicos-menor-acoplamento/
- http://en.wikipedia.org/wiki/Representational_State_Transfer#Claimed_benefits
- https://www.npmjs.com/package/mysql


# CORE
## FS
- **INIT**
```javascript
const fs = require('fs');
```
- **BUFFER** **MEMORY** | Load all, before save
  - **READ FILE** | Read files **BUFFER** **MEMORY**
```javascript
fs.readFile('path', callback(err, buffer));
```
  - **WRITE FILE** | Write files
```javascript
fs.writeFile('fileName', buffer-content, callback(err));
```
- **STREAM** | Load parts and save parts
  - **READ FILE** | read file
```javascript
fs.createReadStream('path');
```
- **WRITE FILE** | write file
```javascript
fs.createWriteStream('path');
```
- **PIPE** | equal **|** grep
```javascript
fs.createReadStream('path').pipe(fs.createWriteStream('nameFile'));
```
- **ON** | Listenner
  - **finish** | finished method
```javascript
fs.createReadStream('path').pipe(fs.createWriteStream('nameFile')).on('finish', callback);
```



# COMMANDS
- **RUN FILE**
```shell
node filename.js
```
- **OPEN CLI**
```shell
node
```
- **EXIT CLI** | _only_ work when code cli run
```javascript
.exit
```
- **AUTO RESTART SERVER**
```shell
nodemon filename.js
```

# FUNCTIONS
- **REQUIRE** || _Load_ file
```javascript
const name = required('path/name');
```
- **EXPORTS** || Create module, and receive other PACKAGES
```javascript
module.exports = () => {};
```



# PACKAGES
## DEV
- **NODEMON** | _Auto restart_ server, watch files
```shell
npm install nodemon --save-dev
```

## PRODUTION
- **EXPRESS** | Request HTTP
```shell
npm install express --save
```
- **LOAD ROUTES** | Helper LOAD routes
```shell
npm install consign --save
```
- **BODY PARSER** |
```shell
npm install body-parser --save
```
- **MYSQL** | DATABASE
```shell
npm install mysql --save
```
- **EXPRESS VALIDATOR** | validate fields integration with **express**
```shell
npm install express-validator --save
```

- **HTTP REQUEST** | CONSUME HTTP
```shell
npm install restify --save
```
- **SOAP WSDL**
```shell
npm install soap --save
```
- **MEMCACHED** | Used for _cache_
```shell
npm install memcached --save
```
- **WINSTON** | To **log**
```shell
npm install winston --save
```
- **MORGAN** | _INTERCEPTOR_, _MIDDLEWARE_, Log for express
```shell
npm install morgan --save
```
- **CLUSTER** | Scalability
```shell
npm install cluster --save
```

### EXPRESS FUNCTIONS
- **INIT**
```javascript
const express = require('express');
const app = express();
```
- **CREATE SERVER**
```javascript
app.listen(PORT, callback);
```
- **CREATE ROUTERS** || CREATE with VERBS HTTP
  - **Args**
    - **req** | this is **REQUEST**
    - **res** | this is **RESPONSE** to client
    - **req.body** | _Contains_ the data in _HTTP BODY_
```javascript
app.get(routeName, (req, res));
app.post(routeName, (req, res));
app.put(routeName, (req, res));
app.delete(routeName, (req, res));
```
- **CREATE ROUTE WITH PARAM**
```javascript
app.put(routeName/:param, (req, res) => {
  const name = req.params.paramName;
});
```
- **RESPONSE** to **client** | use **send()**
  - **JSON** res.json()
  - **STATUS CODE** res.status(number).send();
  - **LOCATION** res.location(local);
```javascript
app.get(routeName, (req, res) => res.send() || res.json());
```
- **GET BODY** | Get the content
```javascript
app.post(routeName, (req, res) => {
  const data = req.body;
});
```
- **ADDED NEW MODULES**
```javascript
app.use(package);
```


### CONSIGN FUNCTIONS
- **INIT**
```javascript
const consign = require('consign');
```
- **INCLUDE** | Select folder
```javascript
consign().include(folderName);
```
- **THEN** | Select folder
```javascript
consign().then(folderName);
```
- **INTO** | Select destination package
```javascript
consign().into(destinationPackage);
```

### BODY PARSER FUNCTIONS
- **INIT**
```javascript
const bodyParser = require('body-parser');
```
- **JSON** | PARSER TO **JSON** FORMAT
```javascript
bodyParser.json();
```
- **URLENCODED** | PARSER TO **URLENCODED** FORMAT
```javascript
bodyParser.urlencoded({extend: true});
```

### MYSQL FUNCTIONS
- **INIT**
```javascript
const mysql = require('mysql');
```
- **CREATE CONNECTION**
```javascript
const createDBConnection = () => mysql.createConnection({
  host,
  user,
  password,
  database
});
```

### EXPRESS VALIDATOR FUNCTIONS
- **INIT**
```javascript
const expressValidator = require('express-validator');
app.use(expressValidator);
```
- **ASSERT** ||
  - **.notEmpty();**
  - **.isFloat();**
```javascript
req.assert(fieldName, msg).notEmpty();
req.assert(fieldName, msg).isFloat();
```
- **VALIDATION ERRORS** | Contains all errors
```javascript
const err = req.validationErros();
```

### RESTIFY FUNCTIONS
- **INIT**
```javascript
const restify = require('restify');
```
- **CREATE CLIENT JSON**
```javascript
const client = restify.createJsonClient({
  url,
});
```
- **CREATE METHOD POST**
```javascript
client.post('path', data, callback(err, req, res, data){

})
```
### SOAP FUNCTIONS
- **INIT**
```javascript
const soap = require('soap');
```
- **CREATE CLIENT**
```javascript
soap.createClient(url, callback(err, client));
```
- **CALL METHODS SOAP**
```javascript
soap.createClient(url, (err, client) => {
  client.methodWSDL(data, callback(err, result));
});
```
### MEMCACHED FUNCTIONS
**INIT**
```javascript
const memcached = require('memcached');
```
- **CREATE CLIENT**
  - **retries** _number_ try pear request
  - **retry** _time_ error in server with next connection
  - **remove** _boolean_ remove _dead_ **cluster**
```javascript
const client = new memcached(urlServerMemcached,{
  retries,
  retry,
  remove
});
```
- **GET INFORMATION** in _cluster_
```javascript
client.get('key', callback(err, result));
```
- **SET INFORMATION** in _cluster_
```javascript
client.set('key', data, timeStayInCluster, callback(err, result));
```
### WINSTON FUNCTIONS
- **INIT**
```javascript
const winston = require('winston');
```
- **CONFIG LOG**
  - **transports** config lever, (debug, info, warning, error)
```javascript
const logger = new winston.lOGGER({
  transports: [
    new winston.transports.File({
      level: "info" ,
      filename: 'path/name',
      maxsize: 1000000, // create new file when limit excced
      maxFiles: 10, // limmit files log create
    })
  ]
})
```
- **WRITE LOG**
```javascript
logger.log(level, msg);
logger.info(msg); // use .level configured in transports
```

### MORGAN FUNCTIONS
- **INIT**
```javascript
const morgan = require('morgan');
```
- **CONFIG** in express _middleware_
  - _formats_
    - **common**
  - _params_
    - **stream** function(){}
```javascript
app.use(morgan(format, {
  stream: {
    write(msg){},
  }
}));
```


### CLUSTER FUNCTIONS
- **INIT**
```javascript
const cluster = require('cluster');
```
- **CREATE SLAVE** | Default execute **same** _file_
```javascript
if(cluster.isMaster){
  cluster.fork();
}
```
- **VERIFY MASTER**
```javascript
cluster.isMaster;
```


# OBSERVATIONS
- **EVENT LOOP**
- **REQ.body** return **undefined** case **doenst** have the package **body parser** _configured_
- **CONSIGN** access resource
```javascript
app.folderName.fileName();
```
- **CURL** _test_ with terminal
  - **-X** change **VERB**
  - **-v** _Verbose_
  - **-H** set **HEADER**
  - **-d** set **body data**
```shell
curl http://localhost:3000/payments/payment -X POST -v -H "Content-type: application/json" -d '{test: 1}'

```
- **STATUS CODE**
  - **100** _CONTINUOUS CONNECTION_
  - **200** _SUCCESS_
    - **201** _CREATED_
  - **300** _REDIRECT_
  - **400** _BAD REQUEST** | _user erros_
  - **500** _INTERNAL ERROR_ | _server erros_

  - **HATEOS** | (**H** ypermedia **A** s **T** he **E** ngine **O **f **A** pplication **S** tate), information in body
  ```javascript
  {
    links: [
      {
        href,
        rel,
        method
      }
    ]
  }
  ```
  - **WEBSERVICE SOAP**
    - What the **WDSL**?
  - **PLUGIN SOAP** when **createClient** is call the **client** _received_ _all methods_ that **wsdl**
  ```javascript
  soap.createClient(url, (err, client) => {
    client.methodsThatWSDL(data, callback);
  });
  ```
  - **USE STREAM** _doesnt_ use **BUFFER**
    - **V8 engine** have _limit memory_
  - **Content too large** | Set _header_ **Content-type: application/octet-stream**
  - For **CACHE** use **memcached**
    - **MISS** | doesnt finded
    - **HIT** | finded
  - **CLUSTER**
    - **SLAVE** _doesnt_ have **FORK**
