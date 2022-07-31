const mongoose= require("mongoose")


const readingListSchema= new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    book:{type:mongoose.Schema.Types.ObjectId,ref:"Books",required:true,unique:true},
    
})

module.exports =mongoose.model("readingList",readingListSchema)