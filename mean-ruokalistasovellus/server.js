var express    = require("express");
var bodyParser = require("body-parser");
var mysql      = require('mysql');

var app = express();
app.use(bodyParser.json());

//Initialize variables for connection
let SqlHost = '192.168.1.115'
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

app.get('/list', function (req, res) {
  connection.query('SELECT * FROM grocery_list', function (error, results, fields) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'grocery list.' });
  });
});
