const mongoose= require("mongoose")


const roomsSchema= new mongoose.Schema({
    book:{type:mongoose.Schema.Types.ObjectId,ref:"Books",unique:true},
    
    
    
})

module.exports =mongoose.model("Room",roomsSchema)