var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database');
db('mongodb://127.0.0.1:27017/cardapio-db');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const usuario = require('./routes/usuario.route');
app.use('/usuario', usuario);

const cardapio = require('./routes/cardapio.route');
app.use('/cardapio', cardapio);

const semana = require('./routes/diaSemana.route');
app.use('/semana', semana);

module.exports = app;
