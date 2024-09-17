const express = require('express');
const connection = require('./connection')
const student = require('./routes/student')
const app = express();
connection();
app.use(student);
app.use(express.json())

app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server is running on 3000")
    }
})

//https:localhost:3000/add/user