const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"gamesx"
});

connection.connect(err=> {
    if(err){
        console.log("Error trying connect to database");
        return;
    }
    console.log("Database is connected");
})

app.get("/",(req,res)=>{
    console.log("Server connected");
    res.send("Server is working");
});

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})