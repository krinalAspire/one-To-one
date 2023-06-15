const express=require("express");
const router = new express.Router();
const User=require("../models/user");
const userroutes=require("../controller/userroutes");

router.get("/user",userroutes.userget);

router.post("/user",userroutes.postuser);

module.exports=router;