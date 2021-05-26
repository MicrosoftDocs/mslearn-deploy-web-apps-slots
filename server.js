var express = require('express');
var port = process.env.PORT || 8080;

var app = express();

app.get('/', (req, res) =>
    res.sendFile(__dirname + '/index.html')
);

app.use('/media', express.static('public'))

app.listen(port, () => {
    console.log(`Application listening at http://localhost:${port}`)
})
