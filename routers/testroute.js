const express=require("express");
const router = new express.Router();
const Test=require("../models/test");
const testroutes=require("../controller/testroutes");

router.get("/test",testroutes.testget);

router.post("/test",testroutes.testuser);

module.exports=router;