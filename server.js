var express    = require("express");
var bodyParser = require("body-parser");
var mysql      = require('mysql');

var app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Initialize variables for connection
let SqlHost = '127.0.0.1'
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

    //Ready array for foods to push and get the current highest index in the database
    var values = new Array();
    var ind = results[0].moti;

    //Fill the array to push to the db
    var bod = req.body.food;
    console.log(typeof bod + " " + bod);
    bod.forEach(food => {
      ind = ind + 1;
      values.push([ind, food]);
    });

    //Push to db
    connection.query('INSERT INTO grocery_list (id, item) VALUES ?;', [values], function (error, results, fields) {
      if (error) {
        console.log('this.sql', this.sql); //command/query
        console.log(values);
        console.log("ERROR");
        console.log(error);
        return;
    }
    });
    console.log('Items ' + values + ' pushed to the DB!');
  });
  
});

app.post('/api/foods/delete', function(req, res){
  console.log('doing delete for...' + req.body.id + ' ' + req.body.food);
  var id = req.body.id;
  var item = req.body.food;


  connection.query('DELETE FROM grocery_list WHERE id=? AND item=?;', [id,item], function (error, results, fields) {
    if (error) {
      console.log('this.sql', this.sql); //command/query
      console.log("ERROR");
      console.log(error);
      return;
  }
  });
});
