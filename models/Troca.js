const mongoose = require('mongoose');

module.exports = function() {
    const schema = mongoose.Schema({
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Usuario',
            required: true
        },
        cardapio: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Cardapio',
            required: true
        },
        pratoPrincipal: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Troca', schema, 'trocas');

}