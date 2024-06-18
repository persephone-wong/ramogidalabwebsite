const express = require('express');
const app = express();
let ejs = require('ejs');
app.use(express.static('public'));
var session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
require('dotenv').config()
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



var store = new MongoDBStore({
    uri: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.bzl2ogl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    collection: 'WebSessions'
});

app.set('view engine', 'ejs');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        maxAge: 60 * 60 * 1000 // 60 minutes
    },
}));


app.listen(3000, () => {
    console.log('server started');
});

express.static('public');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log(username, password);
    if (username === 'admin' && password === 'admin') {
        res.render('dashboard.ejs');
    } else {
        res.send("Invalid credentials");
    }

});


app.get('/research', (req, res) => {
    res.render('research.ejs');
});

app.get('/people', (req, res) => {
    res.render('people.ejs');
});

app.get('/publications', (req, res) => {
    res.render('people.ejs');
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs');
});

app.get('/news', (req, res) => {
    res.render('news.ejs');
});

app.get('*', (req, res) => {
    res.status(404).render('error.ejs');
});



