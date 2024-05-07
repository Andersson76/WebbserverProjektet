const connectionMySQL = require("../connectionMySQL");

exports.getMovies = async (req, res) => {
  let sql = "SELECT * FROM movies";
  try {
    await connectionMySQL.query(sql, (error, results, fields) => {
      if (error) {
        if (error) throw error;
      }
      res.json(results);
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.getMovie = async (req, res) => {
  const { id } = req.params;

  // Vi använder Prepared Statements genom ? i SQL-koden och att ange paramatern i query-funktionen
  let sql = "SELECT * FROM movies WHERE movieId = ?";
  try {
    await connectionMySQL.query(sql, [id], (error, results, fields) => {
      if (error) {
        if (error) throw error;
      }
      res.json(results);
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.createMovie = async (req, res) => {
  const { movieTitle, movieRating } = req.body;

  // använder ADD
  // Vi använder Prepared Statements genom ? i SQL-koden och att ange paramatern i query-funktionen
  let sql = "INSERT INTO movies ( movieTitle, movieRating ) VALUES (?,?)";
  let params = [movieTitle, movieRating];

  if (!movieRating || movieRating.trim().length < 3) {
    return res.status(400).json({
      success: false,
      error: "Du har inte skrivit in någon rating för filmen",
    });
  }

  try {
    await connectionMySQL.query(sql, params, (error, results, fields) => {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
        message: "Du har lagt till en ny film!",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// UPDATE
exports.updateMovie = async (req, res) => {
  const { movieTitle, movieRating, movieId } = req.body;

  // Vi använder Prepared Statements genom ? i SQL-koden och att ange paramatern i query-funktionen
  let sql =
    "UPDATE movies SET movieTitle = ?, movieRating = ? WHERE movieId = ?";
  let params = [movieTitle, movieRating, movieId];

  if (!movieRating || movieRating.trim().length < 3) {
    return res.status(400).json({
      success: false,
      error: "Du har inte skrivit in någon rating för filmen",
    });
  }

  if (!movieId) {
    return res.status(400).json({
      success: false,
      error: "Du har inte skrivit in något ID för filmen du ska uppdatera!",
    });
  }

  try {
    await connectionMySQL.query(sql, params, (error, results, fields) => {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
        message: "Du har ändrat en film",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteMovie = async (req, res) => {
  const { id } = req.body;

  // Vi använder Prepared Statements genom ? i SQL-koden och att ange paramatern i query-funktionen

  if (!id) {
    return res.status(400).json({
      success: false,
      error: "Du har inte skrivit in något ID för filmen du ska radera!",
    });
  }

  try {
    let sql = "DELETE  FROM movies WHERE movieId = ?";
    await connectionMySQL.query(sql, [id], (error, results, fields) => {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
        message: "Filmen är nu raderad!",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getMovieGenre = async (req, res) => {
  let sql =
    "SELECT * FROM movies INNER JOIN genre ON movies.genreID = genre.genreID";

  try {
    await connectionMySQL.query(sql, (error, results, fields) => {
      if (error) {
        if (error) throw error;
      }
      res.json(results);
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
