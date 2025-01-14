const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body);
    // Check if both username and password are provided
    if (username && password) {
        // Check if the user does not already exist
        if (!isValid(username)) {
            // Add the new user to the users array
            users.push({"username": username, "password": password});
            return res.status(200).json({message: "User successfully registered. Now you can login"});
        } else {
            return res.status(404).json({message: "User already exists!"});
        }
    }
    // Return error if username or password is missing
    return res.status(404).json({message: "Unable to register user."});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
    return res.send(books);
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
    return res.send(books[req.params.isbn]);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    const foundBooks = Object.entries(books)
        .filter(([, item]) => item.author == req.params.author)
        .map(([id, item]) => ({id, ...item}));
    return res.send(foundBooks);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    const foundBooks = Object.entries(books)
        .filter(([, item]) => item.title == req.params.title)
        .map(([id, item]) => ({id, ...item}));
    return res.send(foundBooks);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    return res.send(books[req.params.isbn].reviews);
});

module.exports.general = public_users;
