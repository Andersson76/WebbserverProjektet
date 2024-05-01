const connectionMySQL = require("../connectionMySQL");

exports.getWriters = async (req, res) => {
  let sql = "SELECT * FROM writers";
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

exports.getWriter = async (req, res) => {
  const { id } = req.params;

  // Vi använder Prepared Statements genom ? i SQL-koden och att ange paramatern i query-funktionen
  let sql = "SELECT * FROM writers WHERE writerId = ?";
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

exports.createWriter = async (req, res) => {
  const { writerName } = req.body;

  // använder ADD
  // Vi använder Prepared Statements genom ? i SQL-koden och att ange paramatern i query-funktionen
  let sql = "INSERT INTO writers ( writerName ) VALUES (?)";
  let params = [writerName];

  if (!writerName || writerName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: "Du har inte skrivit in något namn för writer",
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
        message: "Du har lagt till en ny writer!",
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
exports.updateWriter = async (req, res) => {
  const { writerName } = req.body;

  // Vi använder Prepared Statements genom ? i SQL-koden och att ange paramatern i query-funktionen
  let sql =
    "UPDATE writers SET writerName = ?  WHERE writerId = ?";
  let params = [
    writerName,
    writerId
  ];

  if (!writerName || writerName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: "Du har inte skrivit in något namn för writer",
    });
  }

  if (!writerId) {
    return res.status(400).json({
      success: false,
      error: "Du har inte skrivit in något ID för writer du ska uppdatera!",
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

// Get movieWiter
exports.getMovieWriter = async (req, res) => {
  let sql =
    "SELECT * FROM movies INNER JOIN writer ON movies.writerID = writer.writerID";

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
