import express from 'express'
import {getTask,taskSingle,PostTask,updateSingleTask} from '../Controller/TaskController.js'


const taskRoute = express.Router()

// read router
taskRoute.get('/getalltask',getTask)

taskRoute.post('/task',taskSingle)
taskRoute.put('/updatetask/:id',updateSingleTask)
//post task
taskRoute.post("/posttask",PostTask)

export default taskRoute