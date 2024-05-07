const connectionMySQL = require("../connectionMySQL");

exports.getDirectors = async (req, res) => {
  let sql = "SELECT * FROM directors";
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

exports.getDirector = async (req, res) => {
  const { id } = req.params;

  // Vi använder Prepared Statements genom ? i SQL-koden och att ange paramatern i query-funktionen
  let sql = "SELECT * FROM directors WHERE directorId = ?";
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

exports.createDirector = async (req, res) => {
  const { directorName } = req.body;

  // använder ADD
  // Vi använder Prepared Statements genom ? i SQL-koden och att ange paramatern i query-funktionen
  let sql = "INSERT INTO directors ( directorName ) VALUES (?)";
  let params = [directorName];

  if (!directorName || directorName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: "Du har inte skrivit in något namn för director",
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
        message: "Du har lagt till en ny director!",
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
exports.updateDirector = async (req, res) => {
  const { directorName } = req.body;

  // Vi använder Prepared Statements genom ? i SQL-koden och att ange paramatern i query-funktionen
  let sql =
    "UPDATE directors SET directorName = ?  WHERE directorId = ?";
  let params = [
    directorName,
    directorId
  ];

  if (!directorName || directorName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: "Du har inte skrivit in något namn för director",
    });
  }

  if (!directorId) {
    return res.status(400).json({
      success: false,
      error: "Du har inte skrivit in något ID för director du ska uppdatera!",
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
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// INNER JOIN
exports.getMovieDirector = async (req, res) => {
  let sql =
    "SELECT * FROM directors INNER JOIN director ON movies.directorID = director.directorID";

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
