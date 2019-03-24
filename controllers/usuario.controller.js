const Usuario = require('../models/Usuario') ();

const controller = {};

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

    Usuario.create(req.body).then(

        function() {
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