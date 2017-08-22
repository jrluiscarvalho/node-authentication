var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'jade');
app.locals.pretty = true;

app.get('/', function(req, res){
    res.render('index.jade');
});

app.post('/register', function(req, res){
    res.json(req.body);
    res.render('register.jade');
});


app.get('/login', function(req, res){
    res.render('login.jade');
});

app.get('/dashboard', function(req, res){
    res.render('dashboard.jade');
});

app.get('/logout', function(req, res){
    res.redirect('/');
});

app.listen(3000);