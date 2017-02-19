const config = require('./config/express')();

config.listen(3000, () => {
  console.log('Listen server port 3000');
});
