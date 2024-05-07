const connectionMySQL = require("../connectionMySQL");

exports.getGenre = async (req, res) => {
  let sql = "SELECT * FROM genre";
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

exports.getGenre = async (req, res) => {
  const { id } = req.params;

  // Vi använder Prepared Statements genom ? i SQL-koden och att ange paramatern i query-funktionen
  let sql = "SELECT * FROM genre WHERE genreId = ?";
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

exports.createGenre = async (req, res) => {
  const { genreName } = req.body;

  // använder ADD
  // Vi använder Prepared Statements genom ? i SQL-koden och att ange paramatern i query-funktionen
  let sql = "INSERT INTO genre ( genreName ) VALUES (?)";
  let params = [genreName];

  if (!genreName || genreName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: "Du har inte skrivit in något namn för genre",
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
        message: "Du har lagt till en ny genre!",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateGenre = async (req, res) => {
  const { id, name } = req.body; // Anta att du skickar med id och namn för genren att uppdatera i req.body

  if (!id || !name) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  let sql = "UPDATE genre SET name = ? WHERE id = ?";
  let values = [name, id];

  try {
    await connectionMySQL.query(sql, values, (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.json({ message: "Genre updated successfully" });
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
