import mongoose from "mongoose"

const schema = mongoose.Schema;

const classSchema= new schema({
  className : {
    type : String,
    required : true },
  teacherId : {
    type : schema.Types.ObjectId,
    ref : 'User',
    required : true
  },
  studentIds : [{
    type : schema.Types.ObjectId,
    ref : 'User'
    required : true }],
}
)

export const Class = mongoose.model("Class" , classSchema)
