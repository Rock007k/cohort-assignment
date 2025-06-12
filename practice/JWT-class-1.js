const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = '1235';

const app = express();

const ALL_USERS = [
    {
        username: "gautammaheshwari135790@gmail.com",
        password: "123456",
        name: "Gautam"
    },
    {
        username: "shivammaheshwari1221998@gmail.com",
        password: "23456",
        name: "Shivam"
    },
    {
        username: "Krishnamaheshwari1@gmail.com",
        password: "456",
        name: "Krishna"
    }
];

function userExists(username, password){
    let userExists = false; 

    ALL_USERS.forEach((user)=>{
        if(username == user.username && password == user.password){
            userExists = true;
        }
    })
    return userExists;
}

app.post("/signup", (req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;

   if( !userExists(username, password)){
    res.status(403).json({msg:"User does not exists in our memory bro."});
   }
   console.log("login Successfull");
   var token = jwt.sign({username : username }, jwtPassword);
   return res.json({
    token
   });
});

app.get('/users',(req,res)=>{
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    res.json({
        users: ALL_USERS
    });
});

app.listen(3001,()=>{
    console.log("Server Started");
});
