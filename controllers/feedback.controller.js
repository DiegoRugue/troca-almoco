const Feedback = require('../models/Feedback') ();

const controller = {};

controller.get = function(req, res) {

    const id = req.params.id;

    Feedback.findById(id).exec().then(

        function(feedback) {
            if(feedback) {
                res.json(feedback).end();
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

    Feedback.find().exec().then(
        function(feedbacks) {
            res.json(feedbacks);
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.post = function(req, res) {

    Feedback.create(req.body).then(

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

    Feedback.findOneAndUpdate({_id: id}, req.body).exec().then(

        function(Feedback) {
            if(Feedback){
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

    Feedback.findOneAndDelete({_id: id}).exec().then(
        function(feedback) {
            if(feedback) {
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