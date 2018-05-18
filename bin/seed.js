require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require("../models/User");
const dbName = 'callme-backend'

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
.then(() => {
    console.log('Connected to Mongo!')
}).catch(err => {
    console.error('Error connecting to mongo', err)
});



const users = [
    {
        email: "lgenoyer@gmail.com",
        password: "en84aevm"
    },
    {
        email: "thierrygenoyer@gmail.com",
        password: "tg3391"
    },
    {
        email: "nizar@gmail.com",
        password: "pizzaPR" 
    }
];

users.forEach(user => {
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
});

User.create(users, err => {
    if (err) {throw err}
    mongoose.connection.close();
});