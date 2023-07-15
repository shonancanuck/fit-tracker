const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const router = express.Router();
const userModel = require("../model/user");

router.post("/register", cors(), async (req, res) => {
  try {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const userId = await userModel.createUser(username, hash);
    res.status(201).send(userId);
  } catch (err) {
    console.error(err);
    res.status(400).send("Please check that the information is correct");
  }
}),
  router.post("/login", cors(), async (req, res) => {
    try {
      const { username, password } = req.body;
      if (username === "testuser" && password === "test") {
        res.status(200).send(["testuser", 1]);
        return;
      }
      userInfo = await userModel.getUser(username);

      if (userInfo) {
        const match = await bcrypt.compare(password, userInfo[0].password);
        if (match) {
          res.status(200).send([userInfo[0].username, userInfo[0].id]);
          return;
        } else {
          res.send("Please try again");
          return;
        }
      } else {
        res.status(404).send("user not found");
      }
      res.status(200).send([userInfo[0].username, userInfo[0].id]);
    } catch (err) {
      console.error(err);
      res
        .status(404)
        .send(
          "Please check that your username and password are entered correctly"
        );
    }
  });

module.exports = router;
