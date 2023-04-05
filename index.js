const express = require('express');
const app = express();
const db = require("./database.js");
const ejs = require("ejs");
const router = express.Router();
app.use(express.urlencoded());
app.set("views",__dirname+"/view");
app.set("view engine",'ejs')
app.get('/',(req,res)=>{
    res.render('index');
})

app.post("/",(req,res)=>{
    var d = req.body;
    // res.send(req.body);
    console.log(req.body);
    var sql = "INSERT INTO details (firstname,lastname, email,dob,gender,address1,address2,city,zipcode,country) values (?,?,?,?,?,?,?,?,?,?)";
    db.query(sql,[d.firstname,d.lastname,d.email,d.dob,d.gender,d.Address_Line_1,d.Address_Line_2,d.City,d.Zipcode,d.Country],(err,data)=>{
        if(err) throw err;
        
        console.log("Updated successfully");
    });
    res.redirect('/get');
    
})

app.get("/get",(req,res)=>{
    
    sql = "select * from details";
    db.query(sql,(err,data)=>{
        if(err) throw err;
        console.log(data);
        res.render('sample_data',{si:data})
    })
})
app.use(express.static(__dirname));

app.listen(3000,(req,res)=>{
    console.log("Connected in port 3000 in http://localhost:3000");
});

/*
create table details(
 id int primary key not null auto_increment,
 firstname varchar(50) default null,
 lastname varchar(50) default null,
 email varchar(50) default null,
 dob date default null,
 gender varchar(50) default null,
 address1 varchar(50) default null,
 address2 varchar(50) default null,
 city varchar(50) default null,
 zipcode int default null,
 country varchar(50) default null);
*/
