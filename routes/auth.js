const nodemailer = require('nodemailer');
const express = require("express");
const passport = require('passport');
const authRoutes = express.Router();
const User = require("../models/User");
const Prospect = require("../models/Prospect");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


const transport = 
nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.gmail_user,
    pass: process.env.gmail_password
  }
});

authRoutes.post("/signup", (req, res, next) => {
  const fullName = req.body.fullName;
  const company = req.body.company;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const planType = req.body.planType;


  const newProspect = new Prospect({
    fullName, 
    company, 
    email, 
    phoneNumber,
    planType
  });

  transport.sendMail({
    from: 'CallMe Click',
    to: process.env.gmail_user,
    subject: `${newProspect.fullName} from ${newProspect.company} just filled out a signup form`,
    text: `
    Name: ${newProspect.fullname}
    Email: ${newProspect.email}
    Company: ${newProspect.company}
    Phone: ${newProspect.phoneNumber},
    Plan: ${newProspect.planType}
    `,
  })

  newProspect.save((err) => {
    if (err) {
      res.json({ userInfo: null });
    } else {
      res.json({ userInfo: null });
    }
    });
  });

authRoutes.post("/login", (req, res, next) => {
  console.log(req.body)
  const myFunction = 
    passport.authenticate("local", (err, theUser) => {
      if (err) {
        next(err);
        return;
      }

      if (!theUser) {
        const err = new Error("Login failed");
        err.status = 400;
        next(err);
        return
      }

      req.login(theUser, () => {
        theUser.password = undefined;
        res.json({ userInfo: theUser });
      });
    });

  myFunction(req, res, next);
});

authRoutes.get("/logout", (req, res) => {
  req.logout();
  res.json({ userInfo: null });
});

authRoutes.get("/checklogin", (req, res, next) => {
  if (req.user) {
    req.user.password = undefined;
  }

  res.json({ userInfo: req.user });
});



module.exports = authRoutes;
