const userModel = require("../model/userSchema");
const readingListModel =require("../model/readingList")
const createNeWUser = (req, res) => {
  const { email, userName, password, role } = req.body;

  const newUser = new userModel({
    email,
    userName,
    password,
    role,
  });
  newUser.save().then((result)=>{
    res.status(201).json(result)
  }).catch((err)=>{
    res.status(404).json({err})
  })
};
const addBookToReading = (req, res) => {
    const { bookId} = req.params;

  const userId=req.token.userId
    const newUser = new readingListModel({
        user:userId,
      book:bookId,
     
    });
    newUser.save().then((result)=>{
      res.status(201).json(result)
    }).catch((err)=>{
      res.status(404).json({err})
    })
  };
  const getReadingList =(req,res)=>{
    const userId=req.token.userId
    readingListModel.find({user:userId}).populate("book").then((result)=>{
res.status(200).json({result})
    }).catch((err)=>{
        res.status(404).json({err})
    })
}
const deleteReadingList =(req,res)=>{
  const {readingBookId}=req.params
  readingListModel.findOneAndDelete({_id:readingBookId}).then((result)=>{
res.status(200).json({result})

  }).catch((err)=>{
    res.status(404).json({err})
})

}


module.exports = {createNeWUser,addBookToReading,getReadingList,deleteReadingList}
