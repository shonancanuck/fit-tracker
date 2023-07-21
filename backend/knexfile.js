require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
    },
    migrations: {
      directory: "./db/data/migrations",
    },
    seeds: {
      directory: "./db/data/seeds",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/data/migrations",
    },
    seeds: {
      directory: "./db/data/seeds",
    },
  },
};
