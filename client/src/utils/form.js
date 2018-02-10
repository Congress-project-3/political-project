const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({extended: true}));

const connection = mysql.createConnection({
  host: "localhost",
  user: "username",
  database: "database_name",
  password : 'your_password'
});

app.post('/register', function (req, res) {
    const email = req.body.email;

    const data = { 
        email
    };

    connection.query('INSERT INTO email SET ?', data, function (error, results, fields) {
      if (error) throw error;
      res.send('Email inserted successfully');
    });
});

app.listen(3000, function() {
    console.log('Server is running on port 3000...');
});