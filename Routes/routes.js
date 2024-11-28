const express=require('express')
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectController')


const jwtMiddle=require('../Middleware/jwtMiddleware')
const multerMiddle=require('../Middleware/multerMiddleware')

const routes=express.Router()

routes.post('/reg',userController.userRegistration)
routes.post('/log',userController.userLogin)
routes.put('/updateprofile',jwtMiddle,multerMiddle.single("profile"),userController.profileUpdation)

routes.post('/addproject',jwtMiddle,multerMiddle.single("image"),projectController.addProject)
routes.get('/projectlist',jwtMiddle,projectController.getprojectList)
routes.delete('/delproject/:id',jwtMiddle,projectController.deleteProject)
routes.put('/editproject/:id',jwtMiddle,multerMiddle.single('image'),projectController.editProject)
routes.get('/allprojects',projectController.allProjects)

module.exports=routes 