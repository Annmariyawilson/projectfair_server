const express=require('express')
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectController')


const jwtMiddle=require('../Middleware/jwtMiddleware')
const multerMiddleware=require('../Middleware/multerMiddleware')

const routes=express.Router()

routes.post('/reg',userController.userRegistration)
routes.post('/log',userController.userLogin)

routes.post('/addproject',jwtMiddle,multerMiddleware.single("image"),projectController.addProjects)

module.exports=routes 