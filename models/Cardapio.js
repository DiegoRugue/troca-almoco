const mongoose = require('mongoose');

module.exports = function() {
    const schema = mongoose.Schema({
        pratoPrincipal: {
            type: String,
            required: true
        },
        opcao1: {
            type: String,
            required: true
        },
        opcao2: {
            type: String,
            required: true
        },
        guarnicao1: {
            type: String,
            required: true
        },
        guarnicao2: {
            type: String,
            required: true
        },
        salada: {
            type: String,
            required: true
        },
        sobremesa: {
            type: String,
            required: true
        },
        data: {
            type: Date,
            required: true
        }
    });

    return mongoose.model('Cardapio', schema, 'cardapios');

}