var express = require('express');
var handlebars = require('express-handlebars');
var app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  console.log("Hello " + req.query.name + " your pants " + req.query.pants);
  //res.send('Hello ' + req.query.name + " your pants what HELLO " + req.query.pants);
  res.render('home', { name: req.query.name}); //dont just send out what im saying, but render it
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//ejr7@nyu.edu
//tedroden@gmail.com