const mongoose = require('mongoose');
const db = 'mongodb://aloyarul:saints96@ds217864.mlab.com:17864/bookstore';

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to database');
  })
  .catch(error => {
    console.log('Mongoose connetion error: ', error);
  });

// Book Schema
const bookSchema = mongoose.Schema({
  title: {
    type: String
  },
  genre: {
    type: String
  },
  description: {
    type: String
  },
  author: {
    type: String
  },
  publisher: {
    type: String
  },

  image_url: {
    type: String
  },
  buy_url: {
    type: String
  }
});

const Book = (module.exports = mongoose.model('Book', bookSchema, 'books'));

// Get Books
module.exports.getBooks = (callback, limit) => {
  Book.find(callback).limit(limit);
};

// Get Book
module.exports.getBookById = (id, callback) => {
  Book.findById(id, callback);
};

// Add Book
module.exports.addBook = (book, callback) => {
  Book.create(book, callback);
};

// Update Book
module.exports.updateBook = (id, book, options, callback) => {
  var query = { _id: id };
  var update = {
    title: book.title,
    genre: book.genre,
    description: book.description,
    author: book.author,
    publisher: book.publisher,
    image_url: book.image_url,
    buy_url: book.buy_url
  };
  Book.findOneAndUpdate(query, update, options, callback);
};

// Delete Book
module.exports.removeBook = (id, callback) => {
  var query = { _id: id };
  Book.remove(query, callback);
};
