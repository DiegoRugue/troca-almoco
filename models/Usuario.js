const mongoose = require('mongoose');

module.exports = function() {
    const schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        user: {
            type: String,
            required: true,
            trim: true,
            index: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            index: true,
            unique: true
        },
        senha: {
            type: String,
            required: true,
            trim: true
        },
        admin: {
            type: Boolean,
            default: false
        }
    });

    return mongoose.model('Usuario', schema, 'usuarios');

}