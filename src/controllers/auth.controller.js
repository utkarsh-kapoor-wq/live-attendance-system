import {User} from "../models/user.schema.js"
import {hashedPassword} from "../utils/hashPassword.js"
import bcrypt from "bcrypt"
import {JWTsession} from "../utils/jwt.js"


export const loginHandler = async (req,res)=>{
  const {email,password}=req.body;
  if(!email || !password){
    return res.status(400).json({
      "success" : false , 
      "error" : "BAD REQUEST missing required field" 
    })
  }
  try {
      const isUserExist = await User.findOne({email:email});
      if(!isUserExist){
        return res.status(404).json({
          "success" : false, 
          "error" : "NOT FOUND : student not found"
        })
      }
      const isPassTrue =  await bcrypt.compare(password,isUserExist.password)
      if (!isPassTrue){
        return res.status(401).json({
          "success":false , 
          "error" : "UNAUTHORIZED : incorrect password"
        })
      }
      
      const accesstoken = JWTsession(res , isUserExist._id,isUserExist.role)
      return res.status(200).json({
        "success" : true , 
        "data" : {email,accesstoken},
        "message" : "SCCESS : loggin successfull"
      })

  } catch (e) {
    console.log(e.message)
  }
 
}


export const signupHandler = async (req,res) =>{
  const {name , email , password , role } = req.body;
  if(!name || !email || !password || !role){
    return res.status(400).json({
      "success" : false , 
      "error" : "BAD REQUEST missing required field" 
    })
  }
  try {
      const userExist = await User.findOne({email : email})
       if (userExist){
         return res.status(409).json(
            {
        "success": false, 
        "error":"CONFLICT : User with this email already exist"
            })
      }

        const hashedpassword = await hashedPassword(password)
        const user = new User({
          name , 
          email , 
          password : hashedpassword,
          role
        })
     await user.save()
     return res.status(201).json({
        "success":true , 
        "data" : {name , email , role},
        "message" : "SUCCESS : student registered "
      })
  }
  catch (error) {
   console.error(error.message) 
  }
  
}

export const logoutHandler = (req,res) =>{
  res.send({
    success : true, 
    message : "logged out successfully"
  })
}

  
