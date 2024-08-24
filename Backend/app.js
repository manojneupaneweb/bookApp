const express = require('express');
const app = express();
const bookRoute = require("./Route/book.route");
const dotenv = require("dotenv");
const mongoose = require('mongoose');

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bookStore'; // Define URI

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to database
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to database");
} catch (error) {
  console.log("Error:", error);
}

// Define route
app.use("/book", bookRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
