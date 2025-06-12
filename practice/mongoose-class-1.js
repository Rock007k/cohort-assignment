import mongoose from "mongoose";
import express from "express";

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://admin:PpcRUSmd3dlqalnD@codex.tn6oewx.mongodb.net/");

const User = mongoose.model('Users',{
    name : String, email : String, password : String
}); 


app.post("/signup", async function(req, res){

    const username = req.headers.username;
    const email = req.headers.email;
    const password = req.headers.password;
    
    const existingUser = await User.findOne({email: email});

    if(existingUser){
       return res.status(200).send("Username already exists")
    }

    const user = new User ({
        name : username,
        email : email,
        password : password
    });
    user.save();
    res.json({
        msg : "User is created successfully"
    });



});w

app.listen(3002,()=>{
    console.log("Server Started");
});


