const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('client'));
app.use(bodyParser.json());

Book = require('./book');

//localhost:5000/api/books
app.get('/api/books', (req, res) => {
  Book.getBooks((err, books) => {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

//localhost:5000/api/books/getID
app.get('/api/books/:_id', (req, res) => {
  Book.getBookById(req.params._id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

//localhost:5000/api/books/add
app.post('/api/books', (req, res) => {
  var book = req.body;
  Book.addBook(book, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

//localhost:5000/api/books/update
app.put('/api/books/:_id', (req, res) => {
  var id = req.params._id;
  var book = req.body;
  Book.updateBook(id, book, {}, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

//localhost:5000/api/books/delete
app.delete('/api/books/:_id', (req, res) => {
  var id = req.params._id;
  Book.removeBook(id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.listen(5000);
console.log('Running on port 5000...');
