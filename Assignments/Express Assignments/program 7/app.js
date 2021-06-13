const express = require('express');

const app = express();

let shoppinglist = [
  {item:'Milk',price:25},
  {item:'Eggs',price:72},
  {item:'Papaya', price:40}
]

app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.get('/items', (req, res) => {
  if (shoppinglist) {
    res.send(shoppinglist);
  } else {
    res.send('Empty Shopping List');
  }
});


app.post('/items', (req, res) => {
  shoppinglist.push(req.body)
  res.send('Item added successfully');
});


app.get('/items/:id', (req, res) => {
   var id = req.params.id
    listitem = shoppinglist[id]
  if (listitem) {
    res.send(listitem);
  } else {
    res.send('Item not present in list');
  }
});


app.patch('/items/:id', (req, res) => {
  id = req.params.id;
  if (id < shoppinglist.length) {
    if(req.body.item !== '' )
      shoppinglist[id].item = req.body.item;
    if(req.body.price !== '')
      shoppinglist[id].price = req.body.price;
    res.send('Item is updated in the list');
  }
  else {
    res.send('Item not present in the list');
  }
});

app.delete('/items/:id', (req, res) => {
  id = req.params.id
  if(id < shoppinglist.length){
    shoppinglist.splice(id,1)
    res.json(shoppinglist);
  }
  else {
    res.send('Item not present in the list');
  }
});

app.listen(3000, console.log("Listening to port 3000..."));