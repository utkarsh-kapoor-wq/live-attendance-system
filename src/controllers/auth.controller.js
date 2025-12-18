export const loginHandler = (req,res)=>{
  const {email,password}=req.body;
  res.status(200).json({
    email,
    password
  })
 
}


export const signupHandler = (req,res) =>{
  res.send({
    success : true,
    message : "sign up successful" 

  })
}

export const logoutHandler = (req,res) =>{
  res.send({
    success : true, 
    message : "logged out successfully"
  })
}

