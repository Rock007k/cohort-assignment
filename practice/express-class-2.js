const express = require('express');
const app = express();

app.get('/app',(req,res,next)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const n = req.query.n;

    if(!(username == 'gautam' && password == 'rock')){
        res.status(401).json({"msg":"Unauthorized"});
        return;
    }

    if(username == 'gautam' && password == 'rock'){
        // res.send('hello world');
        if(n == 1){
            console.log('hello world from 1st function');
            res.send(`hello world from 1st function`);
        }
        else if(n == 2){
            next();
        }
    }
}, function (req, res) {
    console.log('hello world from 2nd function');
    res.send('hello world from 2nd function');
}
);

app.listen(3000);