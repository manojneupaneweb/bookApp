const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/bookStore')
    .then(() => console.log('Connected!'))
    .catch(err => console.error('Connection failed', err));

const bookSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
    des: String,
});

module.exports = mongoose.model("Book", bookSchema);
