require('dotenv').config();
const express=require("express");
const app=express();
const userroute=require("./routers/userroute");
const testroute=require("./routers/testroute");

app.use(express.json());

app.use(userroute);
app.use(testroute);

const port=7171;

app.listen(port,()=>{
    console.log(`servere running at ${port}`);
})

