require('dotenv').config();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'parvindpaswan06@gmail.com',
        pass: 'Tx1aVBMhM'
    }
});

var mailOptions = {
    from: 'parvindpaswan06@gmail.com',
    to: 'parvindpaswan00000@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});