const express =require("express")
const suggestBooksRouter=express.Router()
const {addSuggestBook,getSuggestBook}=require("../controllers/suggestBook")
const {authentication}=require("../midlleware/authantication")


suggestBooksRouter.post("/",authentication,addSuggestBook)
suggestBooksRouter.get("/",getSuggestBook)
module.exports=suggestBooksRouter
