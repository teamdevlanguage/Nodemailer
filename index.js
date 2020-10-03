import { createTransport } from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "br758.hostgator.com.br",
    port: 25,
    secure: false,
    auth: {
        user: "noreply@devlanguage.com.br",
        pass: "testpassword"
    },
    tls: { rejectUnauthorized: false }
});

const mailOptions = {
    from: 'noreply@devlanguage.com.br',
    to: 'clara@devlanguage.com.br',
    subject: 'Sending Email using node.js',
    text: 'Simple test!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
