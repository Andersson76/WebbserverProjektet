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

const movieRoutes = require("./routes/movieRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const writerRoutes = require("./routes/writerRoutes");
const mainActorRoutes = require("./routes/mainActorRoutes");
// const directorRoutes = require("./routes/directorRoutes");
const genreRoutes = require("./routes/genreRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const connectionMongoDB = require("./connectionMongoDB");
connectionMongoDB();

app.use(categoryRoutes);
// app.use(directorRoutes);
app.use(genreRoutes);
app.use(movieRoutes);
app.use(reviewRoutes);
app.use(writerRoutes);
app.use(mainActorRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
