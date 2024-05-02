const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Parse JSON bodies
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.static("public"));

const categoryRoutes = require("./routes/categoryRoutes");
// const genreRoutes = require("./routes/genreRoutes");
const movieRoutes = require("./routes/movieRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const writerRoutes = require("./routes/writerRoutes");

const connectionMongoDB = require("./connectionMongoDB");
connectionMongoDB();

app.use(categoryRoutes);
// app.use(genreRoutes);
app.use(movieRoutes);
app.use(reviewRoutes);
app.use(writerRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
