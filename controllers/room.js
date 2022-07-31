const roomModel = require("../model/room");

const createRoom= (req, res) => {
  const { bookId } = req.params;
  const newRoom = new roomModel({
    book:bookId,
    
  });
  newRoom.save().then((result)=>{
    res.status(201).json(result)
  }).catch((err)=>{
    res.status(404).json(err)
  })
};
const getAllRoom=(req,res)=>{
    roomModel.find().populate("book").then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(404).json({err})
    })
}

const deleteRoom=(req,res)=>{
    const {roomId}=req.params
    roomModel.findOneAndDelete({_id:roomId}).then((result)=>{
        res.status(200).json({succ:true,result})
    }).catch((err)=>{
        res.status(404).json({err})
    })
}
const getRoomById=(req,res)=>{
  const {id}=req.params
  roomModel.find({_Id:id}).populate("book").then((result)=>{
    res.status(200).json(result)
}).catch((err)=>{
    res.status(404).json({err})
})
}

module.exports = {createRoom,deleteRoom,getAllRoom,getRoomById}