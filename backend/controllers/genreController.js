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
