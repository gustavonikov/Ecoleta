const express = require('express');

const server = express();
const nunjucks = require('nunjucks');
const { pageRegistration, pageSaveRegistration, pageSearchResults } = require('./utils/pageFunctions');

server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

server
    .get('/', (req, res) => res.render('index.html'))
    .get('/registration', pageRegistration)
    .post('/save-registration', pageSaveRegistration)
    .get('/search-results', pageSearchResults)
    .listen(3500);
