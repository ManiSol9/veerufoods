const router = require("express").Router();
const db = require("../../dbConfig");
require("dotenv").config();

router.post("/add", async (req, res) => {
  let input = req.body;

  if (input != null || input != undefined) {
    try {
      let date = "2021-03-06";

      let query =
        "INSERT INTO public.dealers (name, email, phone, created_date) VALUES ($1, $2, $3, $4)";

      await db.query(query, [
        input.name,
        input.email,
        input.phone,
        date,
      ]);

      res.send({ status: 200, message: "Inserted successfuly" });
    } catch (e) {
      res.send({ status: 500, message: e.toString() });
    }
  } else {
    res.send({ status: 500, message: "Please send proper input" });
  }
});


router.get("/data", async (req, res) => {
    let input = req.body;
  
      try {
  
        let query =
          "SELECT * FROM dealers";
  
        const response = await db.query(query);
  
        res.send({ status: 200, data: response.rows});
      } catch (e) {
        res.send({ status: 500, message: e.toString() });
      }
  });

module.exports = router;
