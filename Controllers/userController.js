
const users = require('../Models/userModel')
const jwt=require("jsonwebtoken")


exports.userRegistration = async (req, res) => {
    try{
        console.log(req.body);
        const { email, username, password } = req.body
        if (!email || !username || !password) {
            res.status(400).json("Invalid Data")
        }
        else {
    
            const newUser = new users({
                email, username, password , github:"" , linkedln:"" , profile:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    
    }
catch(err){
    console.log(err);
    res.status(400).json(err)
}
}

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const existing = await users.findOne({ email, password })
        if (existing) {

            const token=jwt.sign({userId:existing._id},process.env.SECRET_KEY)
            res.status(200).json({token,username:existing.username,linkedln:existing.linkedln,github:existing.github,profile:existing.profile})
        }
        else {
            res.status(404).json("inavalid Email/Password")
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
}

exports.profileUpdation=async(req,res)=>{
try{

    const userId=req.payload
    if(req.file){
        var profile=req.file.filname
        var {username,github,linkedln}=req.body
    }else{
        var {username,github,linkedln,profile}=req.body
    }

    const existingProfile=await users.findOne({_id:userId})
    existingProfile.username=username
    existingProfile.github=github
    existingProfile.linkedln=linkedln
    existingProfile.profile=profile
    await existingProfile.save()
    res.status(200).json("Profile Updated!!")
}
catch (err) {
    console.log(err);
    res.status(400).json(err)
}
}

