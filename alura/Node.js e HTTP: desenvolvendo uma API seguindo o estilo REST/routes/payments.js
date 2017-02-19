module.exports = (app) => {
  app.get('/test', (req, res) => {
    console.log('ok');
    res.send('ok');
  });

  app.get('/payments', (req, res) =>{
    console.log('payments');
    res.send('payments');
  });

  app.post('/payments/payment', (req, res) => {
    const data = req.body;
    console.log('data', data);
    res.send(
      {
        create: true,
        dateAt: new Date()
    }
    );
  });

};
