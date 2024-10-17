const mongoose=require('mongoose')

const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    languages:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true,
        unique:true
    },
    demo:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    }
})

const projects=mongoose.model('projects',projectSchema)

module.exports=projects