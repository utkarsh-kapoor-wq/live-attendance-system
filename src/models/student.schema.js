import mongoose from "mongoose"

const schema = mongoose.Schema;

const studentSchema = new schema({
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

export const Student = mongoose.model("Student" , studentSchema)
