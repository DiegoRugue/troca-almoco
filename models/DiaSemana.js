const mongoose = require('mongoose');

module.exports = function() {
    const schema = mongoose.Schema({
        segunda: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Cardapio',
            required: true
        },
        terca: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Cardapio',
            required: true
        },
        quarta: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Cardapio',
            required: true
        },
        quinta: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Cardapio',
            required: true
        },
        sexta: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Cardapio',
            required: true
        }
    });

    return mongoose.model('DiaSemana', schema, 'DiasSemana');

}