// PARA INSTALAR O NODE MAILER USAR  --->      npm install nodemailer --save      <---

const nodemailer = require('nodemailer');

module.exports = {
  enviarEmail(destinatario, texto) {
    //CONFIGURANDO O TRANSPORTE DE ENVIO
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "", // ACESSANDO O EMAIL DO REMETENTE
        pass: "" // ACESSANDO  A SENHA DO EMAIL DO REMETENTE
      }
    });
    //CONFIGURANDO O ENVIO PARA O DESTINATARIO
    const mailOptions = {
      from: "", // ACESSANDO O EMAIL DO REMETENTE
      to: destinatario, // INFORMANDO O E-MAIL DO DESTINATÁRIO
      subject: 'Enviando um email pelo Node.js', // TÍTULO DO E-MAIL
      text: texto, // CONTEÚDO DA MENSAGEM
      html: html
    };
    //CONFIGURANDO A MENSAGEM DE ERRO OU DE ENVIO
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error); //MOSTRA QUAL O ERRO 
      } else {
        console.log('Email enviado com sucesso! ' + info.response); //MOSTRA QUE FOI ENVIADO
      }
    });
    /*
    Para usar uma conta do Gmail, tem que desativar na configuração no Gmail, 
    para aceitar App menos seguros.
    https://myaccount.google.com/intro/security?hl=pt-BR
    */
  }
}

