const connectionMySQL = require("../connectionMySQL");

exports.getmainActor = async (req, res) => {
  let sql = "SELECT * FROM mainActor";
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


exports.createmainActor = async (req, res) => {
  const { mainActorName } = req.body;


  let sql = "INSERT INTO mainActor ( mainActorName) VALUES (?)";
  let params = [mainActorName];

  if (!mainActorName || mainActorName.trim().length < 3) {
    return res.status(400).json({
      success: false,
      error: "Du har inte skrivit in någon Actor",
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
        message: "Du har lagt till en ny Actor",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};


exports.updatemainActor = async (req, res) => {
  const { mainActorName} = req.body;


  let sql =
    "UPDATE mainActor SET mainActorName = ?  WHERE mainActorId = ?";
  let params = [
    mainActorName,
    mainActorId
  ];

  if (!mainActorName || mainActorName.trim().length < 1) {
    return res.status(400).json({
      success: false,
      error: "",
    });
  }

  if (!mainActorId) {
    return res.status(400).json({
      success: false,
      error: "Du har inte skrivit in något ID för Actor du ska uppdatera!",
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
