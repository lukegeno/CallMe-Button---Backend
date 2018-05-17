const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require("../models/user");
const dbName = 'callme-backend'

mongoose.Promise = Promise;
mongoose.connect(`mongodb://localhost/${dbName}`, {useMongoClient: true})
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