const nodemailer = require('nodemailer');
const express = require('express');
const router  = express.Router();

const transport = 
nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.gmail_user,
    pass: process.env.gmail_password
  }
});

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.post('/signup-submit', (req, res, next) => {
//   const { fullName, company, email, phoneNumber } = req.body;
//   console.log("hello " + req.body);

//   transport.sendMail({
//     from: 'CallMe Click',
//     to: process.env.gmail_user,
//     subject: `${fullName} from ${company} just filled out a signup form`,
//     text: `
//     Name: ${fullname}
//     Email: ${email}
//     Company: ${company}
//     Phone: ${phoneNumber}
//     `,
//   })
//   .then(()=> {
//     res.json({ userInfo: null });
//   })
//   .catch((err) => {
//     next(err);
//   });
// })

module.exports = router;
