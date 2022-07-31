const bookModel = require("../model/booksSchema");
const readingListModel = require("../model/readingList");
const createBook = (req, res) => {
  const { bookName, description, img, author } = req.body;
console.log({ bookName, description, img, author });
  const newBook = new bookModel({
    bookName,
    description,
    img,
    author,
  });
  newBook
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};
const getAllBooks = (req, res) => {
  bookModel.find({}).then((result) => {
    res.status(200).json({ result });
  });
};
const getReaders = (req, res) => {
  
  readingListModel
    .find()
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      res.status(404).json({ err });
    });
};

const getBookById = (req, res) => {
  const { bookId } = req.params;
  bookModel
    .find({ _id: bookId })
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      res.status(404).json({ err });
    });
};
const deleteBook = (req, res) => {
  const { bookId } = req.params;
  bookModel
    .findOneAndDelete({ _id: bookId })
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      res.status(404).json({ err });
    });
};
module.exports = {
  createBook,
  getAllBooks,
  getReaders,
  getBookById,
  deleteBook,
};
