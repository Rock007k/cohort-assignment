// const express = require('express');

// const app = express();

function getUserData(){
    console.log("Fetching data");

    fetch('https://fakerapi.it/api/v1/persons').then((response)=>{
        return response.json();
    }).then((data)=>{console.log(data);})
    .catch((error)=>{
        console.log(error);
    });
}

export default getUserData;


// app.get('/get', (req, res)=>{
//     const data = 
// })