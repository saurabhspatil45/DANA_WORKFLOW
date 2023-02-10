import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import UserData from "../Models/UserModel.js";
import jwt from "jsonwebtoken";

export const userRegisterController = expressAsyncHandler(async (req, res) => {
  const { fname,lname,username,eid,email,mobno,password,location,isAdmin} = req.body;
 
   let ans = await UserData.create({ fname:fname,lname:lname,username:username,eid:eid,email:email,mobno:mobno,password:password,location:location,isAdmin:isAdmin});
   
    try {
   res.json({ans })

  } catch (error) {
    return res.status(500).json({ error: error});
  }
});

// login controller

export const LoginController = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  const { username, password} = req.body;
try{
  let user = await UserData.findOne({ username:username});
  if (!user) {
    success = false
    return res.status(400).json({ success, error: "Please try to login with correct credentials" })
}
  const token = jwt.sign(
    {
      name: user.name,
    },
    "secretncflowkey"
  );
  return res
    .status(200)
    .json({ message: "user found", token, isAdmin: user.isAdmin });
} catch (error) {
  return res.status(404).json({message:"Not found"})
}
});

// read users

export const GetAllUsers = expressAsyncHandler(async (req, res) => {
  try {
    const data = await userData.find({});
    if (data) {
      return res.status(200).json({ message: "User Found", data });
    }
  } catch (error) {
    return res.status(404).json({ message: "No Data Found" });
  }
});

// update user data

export const UpdateUserData = expressAsyncHandler(async (req, res) => {
    let { id, fname,lname,username,eid,email,mobno,password,location } = req.body.data
    if (password) {
    //  password  = await  bcrypt.hash(password, 10);  
    }
    try {
       
        if (id) {
            const data = await userData.findByIdAndUpdate(id, { fname,lname,username,eid,email,mobno,password,location }, { new: true })
            
            if(data){
                return res.status(201).json({message:"successfully updated",data})
            }
            else {
                return res.status(400).json({message:"no data found to update"})
            }
        }
    } catch (error) {
      return  res.status(500).json({error})
    }
})

// single user Data

export const UserSingle = expressAsyncHandler(async (req, res) => {
    const singleid = req.params.id
console.log(singleid)
    try {
        const data = await userData.findById(singleid)
        if (data) {
          return  res.status(200).json({message:"successfully found single data",data})
        }
        return   res.status(400).json({message:"No id found"})
           
    }
    catch (error) {
        res.status(500).json({error})
    }
})

// controller to delete user data

export const userDelete = expressAsyncHandler(async (req, res) => {
    try {
    const deleteid = await req.body.id
        
        if (deleteid) {
            const data = await userData.findByIdAndDelete(deleteid)
            if (data) {
                return res.status(201).json({message:"data successfully deleted",data})
        }
    }
        else{
            return res.status(400).json({message:"id not found to delete data"})
             } 
}
    catch (error) {
        return res.status(500).json({ error })      
    }
})
// search controller

export const getSearch = expressAsyncHandler(async (req, res) => {
  try {
      const data = await userData.find({ $or: [{ username: { '$regex': req.query.searchQ } }, { email: { '$regex': req.query.searchQ } }, { fname: { '$regex': req.query.searchQ } }, { eid: { '$regex': req.query.searchQ } }] })
      if (data) {
          return res.status(200).json({message:true,data})
      }
  } catch (error) {
    return res.status(404).json({message:"No  found"})
  }
})

export const getSearch2 = expressAsyncHandler(async (req, res) => {
  try {
      const data = await userData.find({ $or: [{ username: { '$regex': req.query.searchQ } }] })
      if (data) {
          return res.status(200).json({message:true,data})
      }
  } catch (error) {
    return res.status(404).json({message:"No  found"})
  }
})
