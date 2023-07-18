const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const userModel = require("../model/user");

const strategy = new LocalStrategy(async (username, password, done) => {
  try {
    userInfo = await userModel.checkPassword(username);
    if (!userInfo) {
      return done(null, false, { message: "Incorrect username or password" });
    }
    const match = await bcrypt.compare(password, userInfo[0].password);
    if (!match) {
      return done(null, false, { message: "Incorrect username or password" });
    }
    return done(null, userInfo);
  } catch (err) {
    return done(err);
  }
});

module.exports = strategy;
