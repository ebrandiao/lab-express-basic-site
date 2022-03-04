const { response } = require('express');
const express = require('express');

const app = express();

app.get('/home', (req, res, next) => {
  res.sendFile(`${__dirname}/views/home-page.html`)
});

app.get('/about', (req, res, next) => {
  res.sendFile(`${__dirname}/views/about-page.html`)
});

app.get('/works', (req, res, next) => {
  res.sendFile(`${__dirname}/views/works-page.html`)
});


app.listen(3000, () => console.log("O app back-end está rodando na porta 3000"));
