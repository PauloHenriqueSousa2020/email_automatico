const options = require('./sendMail');
const crypto = require('crypto');

const codigo = crypto.randomBytes(4).toString('HEX').toUpperCase();

const destinatario = ""  //'E-MAIL DE QUEM VAI RECEBER';
const texto = `ENVIANDO UM CÓDIGO GERADO PELA CRYPTO E ENVIANDO PELO NODEMAILER ${codigo}`

options.enviarEmail(destinatario, texto);