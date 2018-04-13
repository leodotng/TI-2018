// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: 'tidata'
      // database: process.env.DATABASE_NAME
    }
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL
  }
};
