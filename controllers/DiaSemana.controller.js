const DiaSemana = require('../models/DiaSemana') ();

const controller = {};

controller.get = function(req, res) {

    const id = req.params.id;

    DiaSemana.findById(id).exec().then(

        function(diaSemana) {
            if(diaSemana) {
                res.json(diaSemana).end();
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

controller.getAll = function(req, res) {

    DiaSemana.find().exec().then(
        function(diasSemana) {
            res.json(diasSemana);
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.post = function(req, res) {

    DiaSemana.create(req.body).then(

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

    DiaSemana.findOneAndUpdate({_id: id}, req.body).exec().then(

        function(diaSemana) {
            if(diaSemana){
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

    DiaSemana.findOneAndDelete({_id: id}).exec().then(
        function(diaSemana) {
            if(diaSemana) {
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