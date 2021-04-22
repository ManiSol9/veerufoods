const router = require("express").Router();
const db = require("../../dbConfig");
require("dotenv").config();

router.get("/list", (req, res) => {
  res.json({
    message: `Good`,
    status: true,
    blobs: 111,
  });
});

router.get("/liveness", async function (req, res, next) {
  try {
    const { rows } = await db.query(`SELECT NOW()`);
    if (rows != null) res.json({ status: 200 });
  } catch (error) {
    res.status(500).json({ status: 500, error: error });
  }
});

module.exports = router;
