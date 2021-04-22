const router = require("express").Router();
const db = require("../../dbConfig");
require("dotenv").config();

router.post("/add", async (req, res) => {
  let input = req.body;

  if (input != null || input != undefined) {
    try {
      let date = "2021-03-06";

      let query =
        "INSERT INTO public.stocks (total_weight, gross_weight, net_weight, suite, rate, amount, balance, created_date, did) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

      await db.query(query, [
        input.total_weight,
        input.gross_weight,
        input.net_weight,
        input.suite,
        input.rate,
        input.amount,
        0,
        date,
        input.did,
      ]);

      res.send({ status: 200, message: "Inserted successfuly" });
    } catch (e) {
      res.send({ status: 500, message: e.toString() });
    }
  } else {
    res.send({ status: 500, message: "Please send proper input" });
  }
});

router.get("/update", async (req, res) => {
  try {
    let query = "UPDATE public.stocks SET total_weight=$1, gross_weight=$2, net_weight=$3, suite=$4, rate=$5, amount=$6, balance=$7, created_date=$8, did=$9 WHERE id=$10";

    const response = await db.query(query);

    res.send({ status: 200, data: response.rows });
  } catch (e) {
    res.send({ status: 500, message: e.toString() });
  }
});

router.get("/data", async (req, res) => {
  try {
    let query = "SELECT * FROM stocks";

    const response = await db.query(query);

    res.send({ status: 200, data: response.rows });
  } catch (e) {
    res.send({ status: 500, message: e.toString() });
  }
});

module.exports = router;
