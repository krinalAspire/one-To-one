const User=require("../models/user");

exports.userget=async(req,res)=>{
    try{
       const user=await User.findAll();
       console.log(user);
       res.status(201).send(user);
    }catch(e){
        console.log(e.message);
        res.status(404).send(e.message);
    }
}

exports.postuser=async(req,res)=>{
    try{
        const { name, age}= req.body;
        const user= await User.create({
            name, age
        });
        console.log(user);
        res.status(201).send(user);
    }catch(e){
        console.log(e.message);
        res.status(201).send(e.message);
    }
}