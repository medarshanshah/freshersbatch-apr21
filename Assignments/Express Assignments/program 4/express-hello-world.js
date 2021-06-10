var express = require('express'),
app = express(),
port = Number(process.argv[2]) || 8080;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/time',(req,res)=>{
    var date = new Date().toISOString()
    res.send(date)
    console.log(date)
})


app.listen(port);

