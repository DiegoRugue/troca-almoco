const Troca = require('../models/Troca') ();
const emailService = require('../services/email.service');

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

controller.post = function(req, res) {
    Troca.create(req.body).then(
        function() {
            emailService.send('diegorugue@gmail.com', 'Troca do cardapio', global.EMAIL_TMPL2.replace('{0}', req.body.user).replace('{1}', req.body.pratoPrincipal));
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