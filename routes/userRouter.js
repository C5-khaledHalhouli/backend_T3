const express =require("express")
const {createNeWUser,addBookToReading,getReadingList,deleteReadingList}=require("../controllers/user")
const {authentication}=require("../midlleware/authantication")
const userRouter=express.Router()


userRouter.post("/",createNeWUser)
userRouter.post("/readinglist/:bookId",authentication,addBookToReading)
userRouter.get("/readinglist",authentication,getReadingList)
userRouter.delete("/readinglist/:readingBookId",authentication,deleteReadingList)


module.exports=userRouter
