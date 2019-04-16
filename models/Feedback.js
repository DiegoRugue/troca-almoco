const mongoose = require('mongoose');

module.exports = function() {
    const schema = mongoose.Schema({
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Usuario',
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        mensagem: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Feedback', schema, 'feedbacks');

}