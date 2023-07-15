const knex = require("../db/knex");

module.exports = {
  async createUser(username, hash) {
    const newUser = await knex("users")
      .insert({
        username: username,
        password: hash,
      })
      .returning("id", "username");
    return newUser;
  },
  async getUser(username) {
    const userInfo = await knex("users")
      .select("id", "username", "password")
      .where({
        username: username,
      })
      .returning(["id", "username", "password"]);

    return userInfo;
  },
};
