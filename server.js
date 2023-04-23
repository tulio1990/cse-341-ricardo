var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongodb = require('./db/conection');
const port = process.env.PORT || 3000

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

// app.listen(port, () => {
//     console.log(`Server running in ${port} port`);
// })

mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });