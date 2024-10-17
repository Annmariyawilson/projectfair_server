const projects=require('../Models/projectModel')

exports.addProjects=async(req,res)=>{
    try{
        const {title,des,languages,demo,github}=req.body
        const image=req.file.filename
        const userid=req.payload
        if(!title || !des ||!languages ||!demo ||!github ||!image){
            res.status(406).json("Invalid Data")
        }
        else{
    
            const newProjects=new projects({
                title,description:des,languages,demo,github,image,userid
            })
            await newProjects.save()
            res.status(200).json(newProjects)
        }
    
    }
   catch(err){
    console.log(err);
    res.status(400).json(err)
    
   } 
}
