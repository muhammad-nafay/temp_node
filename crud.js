const mysql = require ('mysql');
const express = require ('express');
const bodyParser = require ('body-parser');

var app = express();
app.use(bodyParser.json());


var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    multipleStatements: true
});

mysqlConnection.connect ( (err) => {
    if(!err)
    {
        console.log("Connected");
    }
    else
    {
        console.log("Connection Failed");
    }
} )



app.post('/student', (req,res) => {
    mysqlConnection.query('INSERT INTO students (name,email,phone) values (?,?,?)')
})

app.listen(3000, () => {
    console.log("Express is running on localhost")
});