const express = require('express');

const path = require('path');
const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname, 'public')));


//routes

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/aobut', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'team.html'));
});

//404 route

app.get( (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(port,() => {
    console.log("serve run :", port);
});