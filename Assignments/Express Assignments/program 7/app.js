const express = require('express');
const path = require('path')

let shoppinglist = [
    {item:'Milk',price:25},
    {item:'Eggs',price:72}
]

const app = express();

app.use(express.static(path.join(__dirname, '/views')))
app.use(express.urlencoded({ extended: true}))

app.set('view engine','ejs');


//  REQUESTS
app.get('/',(req,res)=>{
    res.send('Homepage')
})

app.get('/items',function(req,res){
    res.render('list', {shoppinglist})
})

app.get('/items/:id',(req,res)=>{
    var id = req.params.id
    listitem = shoppinglist[id]
    res.render('single',{listitem})
})

app.post('/items',(req,res)=>{
    shoppinglist.push(req.body)
    res.render('list', {shoppinglist})
})

app.patch('/items/:id',(req,res)=>{
    // Should be added later
})

app.delete('/items/:id',(req,res)=>{
    id = req.params.id
    shoppinglist.splice(id,1)
    res.render(shoppinglist)
})



app.listen(3000)


//<%= qs.item %>