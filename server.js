const express = require('express');
const request = require('request');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/proxy', (req, res) => {
    const url = 'https://s3.amazonaws.com/roxiler.com/product_transaction.json';
    request(url).pipe(res);
});

app.listen(5050, () => {
    console.log('Proxy server running on port 3001');
});
