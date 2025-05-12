const express = require('express');

const zod  = require('zod');

const app = express();

app.use(express.json());

const schema  = zod.string();

console.log("Start");
// app.get('/get', (req,res)=>{

// });

app.post('/post', (req,res )=>{

    const body = req.body.msg;
    console.log(body);
    const response = schema.safeParse(body);
    if (response.success){
        res.status(200).json({'msg':`Hello + ${body}`});
    }else{
        res.status(411).json({'msg':`Internal Server Error + ${body}`});
    }
})

app.listen(3008);