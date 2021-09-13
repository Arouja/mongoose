const mongoose =require('mongoose')

const Contacts= new mongoose.Schema(
  {
name:{type:String , required:true},
email:{type:String, unique:true , required:true},
age:Number

  }
)
module.exports= mongoose.model('contact',Contacts)