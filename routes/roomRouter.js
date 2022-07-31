const express =require("express")
const roomRouter=express.Router()
const {createRoom,deleteRoom,getAllRoom,getRoomById}=require("../controllers/room")


roomRouter.get("/",getAllRoom)
roomRouter.get("/:id",getRoomById)

roomRouter.post("/:bookId",createRoom)
roomRouter.delete("/:roomId",deleteRoom)
module.exports=roomRouter