// knexfile.js
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      database: "oprearocks",
      user: "oprearocks",
      password: "Who dis?"
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
