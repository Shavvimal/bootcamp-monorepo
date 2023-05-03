const Author = require('../models/Author');



// Show all 

async function index(req, res) {
    try {
        const authors = await Author.all;
        res.status(200).json(authors);
    } catch (err) {
        res.status(500).send(err);
    }
}

// Authors show by ID route


async function show(req, res) {
    try {
        const author = await Author.findById(parseInt(req.params.id));
        const books = await author.books;
        res.status(200).json({ ...author, books });
    } catch (err) {
        res.status(400).send(err);
    };
}



module.exports = { index, show }