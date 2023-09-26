const express = require("express");
const cors = require("cors");
const router = express.Router();
const model = require("../model/history");

router.get(
  "/extended/user/:userId/exercise/:exerciseId",
  cors(),
  async (req, res) => {
    try {
      const userId = Number(req.params.userId);
      const exerciseId = Number(req.params.exerciseId);
      const result = await model.getHistoryByExercise(userId, exerciseId);
      res.status(200).send(result);
    } catch (err) {
      console.error(err);
      res.status(404).send("Unable to find user history");
    }
  }
);

router.get("/recent/user/:userId", cors(), async (req, res) => {
  try {
    console.log("request for recent history");
    const userId = Number(req.params.userId);
    const result = await model.getMostRecentExercises(userId);
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(404).send("Most recent exercises not found");
  }
});

router.post("/", cors(), async (req, res) => {
  try {
    console.log("request to post workout info");
    console.log(req.body);
    const infoSet = req.body;
    const result = await model.postToHistory(infoSet);
    res.status(201).send(result);
  } catch (err) {
    console.error(err);
    res.status(400).send("Something went wrong");
  }
});

module.exports = router;
