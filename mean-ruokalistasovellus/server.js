var express    = require("express");
var bodyParser = require("body-parser");
var mysql      = require('mysql');

var app = express();
app.use(bodyParser.json());

//Initialize variables for connection
let SqlHost = 'rekkening.eu'
let SqlUser = 'root'
let SqlPass = 'Ihan vitun salainen'
let SqlDB = 'pang'
let SqlPort = '8090'

//Prepare the MySQL connection
var connection = mysql.createConnection({
  host     : SqlHost,
  user     : SqlUser,
  password : SqlPass,
  database : SqlDB,
  port     : SqlPort
});

//Establish the MySQL connection
connection.connect(function(err){
    if (err) throw err;
    console.log('Connected to the database ' + SqlDB + ' at ' + SqlHost);
});

  // Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/api/foods/all', function (req, res) {
  connection.query('SELECT * FROM grocery_list', function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'grocery list.' });
  });
});

app.post('/api/foods/new', function(req, res){
  connection.query('SELECT MAX(id) as moti FROM grocery_list;', function (error, results, fields) {
    if (error) throw error;
    console.log('Eh: ' + results[0].moti);
    var values = [results[0].moti+1, req.body.food];
    console.log('values: ' + values)
    connection.query('INSERT INTO grocery_list (`id`, `item`) VALUES ?;', values, function (error, results, fields) {
      if (error) throw error;

    });
  });
  
});
app.post('/api/foods/delete', function(req, res){
  console.log(req.body);
  console.log(req.body.key1);
});
