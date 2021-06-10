var express = require('express')

var app = express()

const currentYear = new Date().getFullYear();

app.get('/year', (req,res)=>{
    var yearOfBirth = currentYear - req.query.age;
    res.send('You were born in ' + yearOfBirth +'.')
})

app.listen(3000)
console.log('Listening to port 3000')