const Book = require("../model/book.model");

const getbook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {getbook};



