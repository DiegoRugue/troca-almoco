const config = require('../config/config');

// exports.send = async (to, subject, body) => {
//     await sendgrid.send({
//         to: to,
//         from: 'cardapio@teste.com.br',
//         subject: subject,
//         html: body
//     });
// }

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.sendgridKey);
exports.send = async (to, subject, body) => {
    try {
        await sgMail.send({
            to: to,
            from: 'cardapio@teste.com.br',
            subject: subject,
            html: body
        });
    } catch(e) {
        console.error(e);
    }
};