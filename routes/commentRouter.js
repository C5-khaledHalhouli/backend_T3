const express =require("express")
const {createComment,getAllComment,deleteComment}=require("../controllers/comment")
const {authentication}=require("../midlleware/authantication")
const commentRouter=express.Router()



commentRouter.post("/",authentication,createComment)
commentRouter.get("/:bookId",getAllComment)
commentRouter.delete("/:commentId",authentication,deleteComment)
module.exports=commentRouter
