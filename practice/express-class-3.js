// Global catches

const express = require("express");

const app = express();

app.use(express.json());

app.get('/get', (req,res)=>{
    res.status(200).json("'msg':'helloworld'");


});

app.get('/set', (req,res)=>{
    const n = req.query.n;
    console.log(n);
    if(n==1)
        res.status(200).json("'msg':'lovely day something like that'");
    else
        res.status(200).json("'msg':'lovely day sometime like that'");

});

app.post('/post', (req, res)=>{
    const body = req.query.body;
    console.log(body);
    throw new Error('error');
    res.status(200).json(`'msg':“${body}”`);

});

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).json("'msg':'internal server error'");
});

app.listen(3007);

