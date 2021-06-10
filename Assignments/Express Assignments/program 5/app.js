var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

const port = Number(process.argv[2])
var app = express()
      
app.use(bodyParser.urlencoded({ extended: false })); 
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.render('form'));

app.post('/form', (req, res) => {
  res.send(reverse(req.body.str));
});

function reverse(string) {
//   let reversedString = '';
//   for (let index = string.length - 1; index >=0; index--)
//     reversedString += string[index];
//   return reversedString;

    return string.split("").reverse().join("");
}


app.listen(port);
console.log('Listening to port '+port)