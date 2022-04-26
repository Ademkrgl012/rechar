const express = require('express');
const app = new express();
const pages = __dirname + '/pages';
const chalk = require('chalk');
app.get('/', async function(req, res) {
    res.sendFile(pages + '/index.html');
});

app.get('*', async function(req, res) {
    res.sendFile(pages + '/errors/404.html');
});

app.listen(process.env.PORT || 3000, () => console.log(chalk.red.bold('Express server is online')));