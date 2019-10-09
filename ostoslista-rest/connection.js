var mysql = require('mysql');

var con = mysql.createConnection({
  host: "db.rekkening.eu",
  user: "muistoMan",
  password: "ÄläDossaa9"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});