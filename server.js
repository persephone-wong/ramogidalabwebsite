const express = require('express');
const app = express();
let ejs = require('ejs');
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('server started');
});

express.static('public');

app.get('/', (req, res) => {
    res.render('index.ejs');
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



