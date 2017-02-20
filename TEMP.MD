##LINKS
- http://blog.caelum.com.br/hipermidia-e-contratos-dinamicos-menor-acoplamento/
- http://en.wikipedia.org/wiki/Representational_State_Transfer#Claimed_benefits
- https://www.npmjs.com/package/mysql

##PACKAGE
- **HTTP REQUEST** | CONSUME HTTP
```shell
npm install restify --save
```
- **SOAP WSDL**
```shell
npm install soap --save
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
