const mongoose=require("mongoose")

const connectionString=process.env.DB_Connection

mongoose.connect(connectionString).then((res)=>{
  console.log("Server Connected to MongoDB DataBase")
}).catch((err)=>{
    console.log(err)
})