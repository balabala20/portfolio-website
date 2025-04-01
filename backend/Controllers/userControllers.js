const User = require("../Models/User");

const createUser = async (req,res)=>{
    try{
        const {name,email,message} = req.body;
        const user = new User({
            name,
            email,
            message
        })
        await user.save()
        res.status(201).json(user);
    } catch(error){
        console.log("there is an error:",error)
        res.status(500).json({message: "server error"})
    }
}

const getUser = async (req,res)=>{
    try{
        const user = await User.find();
    res.status(200).json(user);
    }catch(err){
        res.status(500).json({message:"server error"});
    }
}

const deleteUser = async (req,res)=>{
    try{
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.status(204).send()
    }catch(err){
        console.log("there is an error",err);
        res.status(500).json({message:"server error"})
    }
}

module.exports = {createUser,getUser,deleteUser};