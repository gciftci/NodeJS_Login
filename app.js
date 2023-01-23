const express = require('express');
const dotenv = require('dotenv');
const mariadb = require('mariadb');
const bcrypt = require("bcryptjs");
const path = require("path");

const publicDir = path.join(__dirname, './views');
const app = express(); 

app.use(express.urlencoded({extended: 'false'}));
app.use(express.json());
app.use(express.static(publicDir));

// .env-Config
dotenv.config({ path: '/etc/.env'})

// View Engine HBS
app.set('view engine', 'hbs')

// MariaDB-Pool init
const pool = mariadb.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

//Routes
app.use('/', require('./routes'));
app.use('/register', require('./routes/users'));
app.use('/dashboard', require('./routes/dashboard'));

app.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');