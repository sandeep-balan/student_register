const mysql = require("mysql");
const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123123123",
    database:"student_register"
})
conn.connect((err)=>{
    
    if(err){
        console.log(err);
    }
    else{
        console.log("Connected to the database successfully");
    }
})
module.exports = conn;