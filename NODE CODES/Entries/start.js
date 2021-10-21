const app = require('./app').app;

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});