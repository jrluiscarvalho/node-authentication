var express = require('express')
, app = express()
, bodyParser = require('body-parser')
, mongoose = require('mongoose')
, jwt = require('jwt-simple');

var routes = require('./routes/routes')

var authRequire = require('./service/auth');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;
var router = express.Router();

app.use('/api', router);


  router.route('/usuarios')
    .get(authRequire, routes.getUsuarios)
    .post(routes.postUsuarios);
  router.route('/login')
    .post(routes.login);

mongoose.connect('mongodb://localhost/jwtAuth');
app.listen(port);
console.log('conectado a porta ' + port);

