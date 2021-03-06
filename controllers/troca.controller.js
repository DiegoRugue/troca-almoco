const Troca = require('../models/Troca') ();
const emailService = require('../services/email.service');
const Usuario = require('../models/Usuario');

const controller = {};

controller.get = function(req, res) {

    const id = req.params.id;

    Troca.findById(id).exec().then(

        function(troca) {
            if(troca) {
                res.json(troca).end();
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

controller.getUser = function(req, res) {
    
    Troca.find(req.body).exec().then(
        function(usuarios) {
            res.json(usuarios);
        },
        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.getAll = function(req, res) {

    Troca.find().populate('user', 'nome').populate('cardapio', 'data').exec().then(
        function(trocas) {
            res.json(trocas);
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}
controller.post = async function(req, res) {

    try {
        await Troca.create(req.body);
        await Usuario.findById(req.body.user).exec();
        emailService.send('diegorugue@gmail.com', 'Troca do cardapio', global.EMAIL_TMPL2.replace('{0}', user.nome).replace('{1}', req.body.pratoPrincipal));
        res.sendStatus(201).end();
    } catch (e) {
        console.error(e);
        res.sendStatus(500).end();
    }
}

controller.put = function(req, res) {

    const id = req.body._id;

    Troca.findOneAndUpdate({_id: id}, req.body).exec().then(

        function(troca) {
            if(troca){
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

    Troca.findOneAndDelete({_id: id}).exec().then(
        function(troca) {
            if(troca) {
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