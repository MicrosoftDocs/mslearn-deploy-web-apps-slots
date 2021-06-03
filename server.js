var express = require('express');
var port = process.env.PORT || 8080;
const fs = require('fs');
const header = process.env.SITE_HEADER || 'Transforming the work place';

var app = express();

app.use('/media', express.static('public'));

app.use('/', (_, res) =>
    fs.readFile(__dirname + '/index.html', (_, data) =>
        res.send(
            data.toString().replace('<!--header-placeholder-->', header)
        )
    )
);

app.listen(port, () => {
    console.log(`Application listening at http://localhost:${port}`)
});