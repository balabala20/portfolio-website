const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require('./Routes/userRoutes');
const cors = require("cors");
const dotEnv = require("dotenv");

const app = express();
const port = process.env.PORT  || 5000;
app.use(express.json());
app.use(cors());
dotEnv.config();
const db = process.env.mongoose_uri;

mongoose.connect(db)
.then(()=>{
    console.log("mongodb is connected successfully");
})
.catch((err)=>{
    console.log("there is an error:",err);
})

app.use("/users",userRoutes);

app.get('/', (req, res) => {
    res.send('Backend is running!');
  });


app.listen(port,(err)=>{
    if(!err){
        console.log(`server is created and running at http://localhost:${port}`);
    }
    else{
        console.log("there is an error",err);
    }
})

module.exports = async (req,res)=>{
    res.status(200).json({message:"hello from serverless function"});
};
