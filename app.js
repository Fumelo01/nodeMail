require ('dotenv').config()

const express = require('express')
const nodemailer = require('nodemailer')
const routes = require('./src/routes/routes')
const app = express()
app.use('/', routes)

const PORT = process.env.PORT

const host = process.env.HOST
console.log(host)

/*
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});

let mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: '',
    subject: 'Nodemailer Project',
    text: 'eiwuew'
}

transporter.sendMail(mailOptions, (err, info)=> {
    if (err) {
        console.log(err);
    } else {
        console.log('Email sent sucessfully. \nInfo: ' + info);
    }
});
*/
console.log(process.env.MAIL_USERNAME)
app.listen(PORT, ()=>{
    console.log(`The nodeMail Server is running at port ${PORT} \nhttp://${host}:${PORT}`)
})
