var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var app = express();
const config = require('./config/config');

const db = require('./config/database');
//db('mongodb://127.0.0.1:27017/cardapio-db');
db(config.connectionString);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

const usuario = require('./routes/usuario.route');
app.use('/usuario', usuario);

const cardapio = require('./routes/cardapio.route');
app.use('/cardapio', cardapio);

const troca = require('./routes/troca.route');
app.use('/troca', troca);

const feedback = require('./routes/feedback.route');
app.use('/feedback', feedback);

module.exports = app;
