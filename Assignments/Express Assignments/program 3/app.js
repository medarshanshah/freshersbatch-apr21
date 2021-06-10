var express = require('express'),
app = express(),
port = Number(process.argv[2]);

app.get('/home', (req, res) => res.send('Hello World!'));


app.listen(port);

