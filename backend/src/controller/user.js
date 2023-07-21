const express = require("express");
const passport = require("passport");
const strategy = require("../auth/LocalStrategy");
const serial = require("../auth/index");
const bcrypt = require("bcrypt");
const router = express.Router();
const userModel = require("../model/user");

passport.use(strategy);

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const id = await userModel.createUser(username, hash);
    userId = id[0];
    userInfo = {
      username: username,
      userId: userId.id,
      loggedIn: true,
    };
    req.logIn(username, function (err) {
      if (err) {
        return next(err);
      }
      req.session.passport.user.username = userInfo.username;
      req.session.passport.user.id = userInfo.userId;
      return req.session;
    });
    console.log(req.session);
    res.status(201).send(userInfo);
  } catch (err) {
    console.error(err);
    res.status(400).send("Please check that the information is correct");
  }
}),
  router.post(
    "/login",
    passport.authenticate("local", { failureMessage: true }),
    async (req, res) => {
      try {
        const { username, password } = req.body;

        const userInfo = await userModel.getUser(username);
        req.session.passport.user.id = userInfo[0].id;
        req.session.passport.user.username = userInfo[0].username;
        const user = {
          userId: userInfo[0].id,
          username: userInfo[0].username,
          loggedIn: true,
        };
        console.log(req.session);
        res.status(200).send(user);
      } catch (err) {
        console.error(err);
        res
          .status(404)
          .send(
            "Please check that your username and password are entered correctly"
          );
      }
    }
  );

module.exports = router;
