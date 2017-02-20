##LINKS
- http://blog.caelum.com.br/hipermidia-e-contratos-dinamicos-menor-acoplamento/
- http://en.wikipedia.org/wiki/Representational_State_Transfer#Claimed_benefits
- https://www.npmjs.com/package/mysql

## CORE
### FS
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

##PACKAGE
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


##OBS

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
