import expressAsyncHandler from "express-async-handler";
import taskObjectData from "../Models/TaskObjectModel.js";


export const getTaskObject = expressAsyncHandler(async (req, res) => {
    try {

        const data2 = await taskObjectData.find({ $or: [{ ResolutionownerId: { '$regex': req.query.searchQ } },{ RCAValidatorId: { '$regex': req.query.searchQ } },{ FinalapproverId: { '$regex': req.query.searchQ } }] })

console.log(data2)
                let data=[];
                let data3=[];
        
      for (let i = 0; i < data2.length; i++) {
        if(data2[i].ResolutionownerId === req.query.searchQ && data2[i].ROStatus === "Active")
        {
          console.log("inside logic")
data.push(data2[i])

        }
        if(data2[i].RCAValidatorId === req.query.searchQ && data2[i].ValidatorStatus === "Active")
        {
          console.log("inside logic")
data.push(data2[i])

        }
        if(data2[i].ResolutionownerId === req.query.searchQ && data2[i].ApproverStatus === "Active")
        {
          console.log("inside logic")
data.push(data2[i])

        }
      }
      console.log("this is data" + data)
    
        if (data) {
            return res.status(200).json({message:true,data})
        }
    } catch (error) {
      return res.status(404).json({message:"No found"})
    }
  })


export const taskSingleObject = expressAsyncHandler(async (req, res) => {
  const singleid = req.params.id
console.log(singleid)
  try {
      const data = await taskObjectData.findById(singleid)
      if (data) {
        return  res.status(200).json({message:"successfully found single task",data})
      }
      return   res.status(400).json({message:"No id found"})
         
  }
  catch (error) {
      res.status(500).json({error})
  }
})

// post request for ncr modify
export const PostTaskObject = expressAsyncHandler(async (req, res) => {
  const {Id,Issue,Resolutionowner,ResolutionownerId,RCAValidator,RCAValidatorId,Finalapprover,FinalapproverId,Creator,CreatorId,created,AssignedDate,CompletionDate,CreatorStatus,ROStatus,ValidatorStatus,ApproverStatus,CreatorComment,ROComment,ValidatorComment,ApproverComment} = req.body.data
  try {
      const data = await new taskObjectData({ Id,Issue,Resolutionowner,ResolutionownerId,RCAValidator,RCAValidatorId,Finalapprover,FinalapproverId,Creator,CreatorId,created,AssignedDate,CompletionDate,CreatorStatus,ROStatus,ValidatorStatus,ApproverStatus,CreatorComment,ROComment,ValidatorComment,ApproverComment})
      if (data) {
          await data.save((error, response) => {
              if (error) {
                  return res.status(400).json({message:"Error to create",error})
              }
              if (response) {
                  return res.status(201).json({message:"Task Data Created Successfully",data})
              }
          })
      }
  } catch (error) {
      res.status(500).json({message:"internal server error",error})
  }
})


// update single task Data

export const updateSingleTaskObj = expressAsyncHandler(async (req, res) => {
  const singleid = req.params.id
  const credentials = req.body
  console.log("contenment action is")
  console.log(singleid)

  try {
      const data = await taskObjectData.find({singleid})
     console.log(data)
      if (data) {
      await taskObjectData.updateOne( {Id:singleid}, { $set:credentials
         })
        return  res.status(200).json({message:"successfully updated single task object",data})
      }
      return   res.status(400).json({message:"No id found"})
         
  }
  catch (error) {
      res.status(500).json({error})
  }
})