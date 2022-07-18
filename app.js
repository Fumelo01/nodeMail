require ('dotenv').config()
const log = console.log;
const express = require('express')
const nodemailer = require('nodemailer')
//const routes = require('./src/routes/routes')
const app = express()
//app.use('/', routes)
const { json } = require ('express')
app.use(json());


const PORT = process.env.PORT

const host = process.env.HOST



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
    to: 'oluwafunmilayoa2@gmail.com,iyanu4real@gmail.com,oluwafunmilayoutme2020@gmail.com',
    subject: 'Oluwafunmilayo\'s  Nodemailer Project',
    text: 'Philippians 4:8  Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things.'
}

transporter.sendMail(mailOptions, (err, data)=> {
    if (err) {
        log(err);
    } else {
        log({message: 'Email sent sucessfully, more info below'})
        log(data)
    }
});

//app.listen(PORT, ()=>{
  //  console.log(`The nodeMail Server is running at port ${PORT} \nhttp://${host}:${PORT}`)
//})
