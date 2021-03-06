var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

load('Models')
  .then('Routes')
  .into(app);

app.listen(process.env.PORT || 8080, function() {
	console.log('QUERO SER TECH!!');
});
