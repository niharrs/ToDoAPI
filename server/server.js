const express = require ('express');
const bodyParser = require ('body-parser');

var {mongoose} = require ('./db/mongoose');
var {Todo} = require ('./models/todo');

var app = express();

//bodyParser takes JSON string and converts it into an object and
//attaching it on the request
app.use(bodyParser.json());

 app.post('/todos', (req, res) => {
   var todo = new Todo({
     text: req.body.text
   });
   todo.save().then((doc) => {
     res.send(doc);
   }, (e) => {
     res.status(400).send(e);
   });
 });

app.listen(3000, () => {
  console.log("Started on port 3000");
});
