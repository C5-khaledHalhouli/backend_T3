const suggestBooksModel = require("../model/suggestBooks");

const addSuggestBook = (req, res) => {
  const { bookName } = req.body;
  const user = req.token.userId;
  const newSuggestBook = new suggestBooksModel({
    bookName,
    user,
  });
  newSuggestBook
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

const getSuggestBook = (req, res) => {
  suggestBooksModel
    .find()
    .populate("user", "userName -_id")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

module.exports = { addSuggestBook,getSuggestBook };
