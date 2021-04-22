const { Pool } = require('pg')
let pool;

(async () => {
  try {
    pool = new Pool({
      user: "Mani",
      host: "postgresql-22286-0.cloudclusters.net",
      database: "food_factory",
      password: "ManiSol@9",
      port: "22286"
    });

  } catch (error) {
    throw error;
  }
})();

module.exports = {
  query: (text, params) => pool.query(text, params)
}