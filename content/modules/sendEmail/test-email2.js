 const {
    Router
  } = require('express');
  const sendEmail2 = new Router();
  var nodemailer = require('nodemailer');
  var hbs = require('nodemailer-express-handlebars');
  const path = require('path');
  sendEmail2.post('/send-tes_config_email2', function  (req, res) {
    var body = req.body;
    let email = body.email;
    let token = body.message;
    async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // hostname
      secureConnection: false,
      port: 465,
      auth: {
        user: process.env.Email,
        pass: process.env.Password,  
      }
    });
    var options = {
      viewEngine: {
          extname: '.hbs',
          layoutsDir: 'content/template/father/',
          defaultLayout : 'activate',
          partialsDir : 'content/template/father/activate' 
      },
      viewPath: 'content/template/father/' ,
      extName: '.hbs'
  };
    transporter.use('compile', hbs(options));
  
  
     transporter.sendMail({
      from: process.env.Email,
      to: email,
      subject: "Activa tu cuenta en Nanny 365",
      template: 'activate',
      context: {
       
      }
      },function (error, response) {
        console.log('response')
        transporter.close();
    })
  
    }
    main().catch(console.error);
    res.sendStatus(200)
    res.end()
  })
  module.exports = sendEmail2; const {
    Router
  } = require('express');
  const sendEmail2 = new Router();
  var nodemailer = require('nodemailer');
  var hbs = require('nodemailer-express-handlebars');
  const path = require('path');
  sendEmail2.post('/send-tes_config_email2', function  (req, res) {
    var body = req.body;
    let email = body.email;
    let token = body.message;
    async function main() {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // hostname
      secureConnection: false,
      port: 465,
      auth: {
        user: process.env.Email,
        pass: process.env.Password,  
      }
    });
    var options = {
      viewEngine: {
          extname: '.hbs',
          layoutsDir: 'content/template/father/',
          defaultLayout : 'activate',
          partialsDir : 'content/template/father/activate' 
      },
      viewPath: 'content/template/father/' ,
      extName: '.hbs'
  };
    transporter.use('compile', hbs(options));
  
  
     transporter.sendMail({
      from: process.env.Email,
      to: email,
      subject: "Activa tu cuenta en Nanny 365",
      template: 'activate',
      context: {
       
      }
      },function (error, response) {
        console.log('response')
        transporter.close();
    })
  
    }
    main().catch(console.error);
    res.sendStatus(200)
    res.end()
  })
  module.exports = sendEmail2;