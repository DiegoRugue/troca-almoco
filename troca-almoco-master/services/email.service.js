const config = require('../config/config');
const sendgrid = require('sendgrid')(config.sendgridKey);

exports.send = async (to, subject, body) => {
    sendgrid.send({
        to: to,
        from: 'cardapio@smn.com.br',
        subject: subject,
        html: body
    });
}