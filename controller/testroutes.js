const Test=require("../models/test");

exports.testget=async(req,res)=>{
    try{
       const user=await Test.findAll();
       console.log(user);
       res.status(201).send(user);
    }catch(e){
        console.log(e.message);
        res.status(404).send(e.message);
    }
}

exports.testuser=async(req,res)=>{
    try{
        const { Qpaper, marks}= req.body;
        const user= await Test.create({
            Qpaper, marks
        });
        console.log(user);
        res.status(201).send(user);
    }catch(e){
        console.log(e.message);
        res.status(201).send(e.message);
    }
}