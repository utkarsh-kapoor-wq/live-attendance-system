import bcrypt from "bcrypt"

export const hashedPassword = async(password)=>{
  const salt = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash(password,salt);
  return pass;
}
