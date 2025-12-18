import {Teacher} from "../models/teacher.schema.js"
import {Student} from "../models/student.schema.js"
import {hashedPassword} from "../utils/hashPassword.js"


export const loginHandler = (req,res)=>{
  const {email,password,role}=req.body;
  if(!name || !email || !password || !role){
    return res.status(400).json({
      "success" : false , 
      "error" : "BAD REQUEST missing required field" 
    })
  }
  try {
    if (role === "student"){
      const isStudentExist = await Student.findOne({email:email});
      bcryp
      if (isStudentExist){
        
    
      }
      else{
        return res.status()
      }
    }
  } catch (e) {
    
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
    
  
  if (role === "teacher"){
    const isTeacherExist = await Teacher.findOne({email : email});
    if (isTeacherExist){
      return res.status(409).json({
        "success" : false, 
        "error" : "CONFLICT : teacher with this email already exist "
      })
    }
    const hashedpassword = await hashedPassword(password)
    const teacher = new Teacher({
      name , 
      email , 
      password : hashedpassword 
    })
    
    await teacher.save()
    return res.status(201).json({
        "success":true , 
        "data" : {name , email},
        "message" : "SUCCESS : new teacher registered "
      })
    console.log("teacher successfully registered")
  }

  if (role === "student"){
    const isStudentExist = await Student.findOne({email : email})
    if (isStudentExist){
      return res.status(409).json({
        "success": false , 
        "error":"CONFLICT : Student with this email already exist"
      })
    }
     const hashedpassword = await hashedPassword(password)
        const sudent = new Student({
          name , 
          email , 
          password : hashedpassword 
        })
     await student.save()
     return res.status(201).json({
        "success":true , 
        "data" : {name , email},
        "message" : "SUCCESS : student registered "
      })
  }
} catch (error) {
   console.error(error.message) 
  }
  
}

export const logoutHandler = (req,res) =>{
  res.send({
    success : true, 
    message : "logged out successfully"
  })
}

