import mongoose from "mongoose"

const schema = mongoose.Schema;

const teacherSchema = new schema({
  name : {
    type : String,
    required : true },
  email : {
    type : String,
    required : true 
  },
  password : {
    type : String,
    required : true }
}
)

export const Teacher = mongoose.model("Teacher" , teacherSchema)
