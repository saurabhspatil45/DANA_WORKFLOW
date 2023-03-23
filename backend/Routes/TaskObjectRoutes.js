import express from 'express'
import {getTaskObject,taskSingleObject,PostTaskObject, updateSingleTaskObj} from '../Controller/TaskObjectController.js'


const taskObjectRoute = express.Router()

// read router
taskObjectRoute.get('/getalltaskobject',getTaskObject)

taskObjectRoute.get('/taskobject/:id',taskSingleObject)

//post task
taskObjectRoute.post("/posttaskobject",PostTaskObject)
taskObjectRoute.put('/updatetaskObj/:id',updateSingleTaskObj)

export default taskObjectRoute