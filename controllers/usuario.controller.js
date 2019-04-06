const md5 = require('md5');
const Usuario = require('../models/Usuario') ();
const emailService = require('../services/email.service');

const controller = {};

controller.logar = function(req, res) {

    const user = req.params.user;
    const senha = md5(req.body.senha + global.SALT_KEY);

    Usuario.findOne({user: user}).exec().then(

        function(user) {
            if(user.senha == senha) {
                res.json(user).end();
            } else {
                res.sendStatus(404).end();
            }
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.get = function(req, res) {

    const id = req.params.id;

    Usuario.findById(id).exec().then(

        function(usuario) {
            if(usuario) {
                res.json(usuario).end();
            } else {
                res.sendStatus(404).end();
            }
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.post = function(req, res) {

    Usuario.create({
        nome: req.body.nome,
        user: req.body.user,
        email: req.body.email,
        senha: md5(req.body.senha + global.SALT_KEY)
    }).then(
        function() {
            emailService.send(req.body.email, 'Bem vindo ao Cardapio da SMN', global.EMAIL_TMPL.replace('{0}', req.body.nome));
            res.sendStatus(201).end();
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.put = function(req, res) {

    const id = req.body._id;

    Usuario.findOneAndUpdate({_id: id}, req.body).exec().then(

        function(usuario) {
            if(usuario){
                res.sendStatus(204).end();
            } else {
                res.sendStatus(404).end();
            }
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.delete = function(req, res) {

    const id = req.params.id;

    Usuario.findOneAndDelete({_id: id}).exec().then(
        function(usuario) {
            if(usuario) {
                res.sendStatus(204).end();
            } else {
                res.sendStatus(404).end();
            }
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

module.exports = controller;