import mongoose from "mongoose"

const schema = mongoose.Schema;

const classSchema= new schema({
  classId : {
    type : schema.Types.ObjectId,
    ref : 'Class',
    required : true
  },
  studentIds : {
    type : schema.Types.ObjectId,
    ref : 'User'
    required : true 
  },
  status:{
    type : String , 
    enum : ['present', 'absent']
    required : true
  }
}
)

export const Class = mongoose.model("Class" , classSchema)
