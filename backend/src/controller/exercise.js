const express = require("express");
const cors = require("cors");
const router = express.Router();
const exerciseModel = require("../model/exercise");

// GET
router.get("/", cors(), async (req, res) => {
  try {
    result = await exerciseModel.getAll();
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(404).send("Exercises not found");
  }
});

// POST

// for future use

// router.post("/", cors(), async (req, res) => {
//   try {
//     const newExercise = req.body;
//     result = await exerciseModel.addExercise(newExercise);
//     res.status(201).send("Successfully created a new exercise!");
//   } catch (err) {
//     console.error(err);
//     res.status(400).send("Request failed");
//   }
// });

// PATCH

// for future use

// router.patch(`/:exerciseId`, cors(), async (req, res) => {
//   try {
//     const exerciseId = req.params.exerciseId;
//     const change = req.body;
//     result = await exerciseModel.changeExercise(exerciseId, change);
//     res.status(201).send("Change successful");
//   } catch (err) {
//     console.error(err);
//     res.status(400).send("Request failed");
//   }
// });

// DELETE

// for future use

// router.delete(`/:exerciseId`, cors(), async (req, res) => {
//   try {
//     const exerciseId = req.params.exerciseId;
//     result = await exerciseModel.removeExercise(exerciseId);
//     res.status(200).send("Exercise successfully deleted");
//   } catch (err) {
//     console.error(err);
//     res.status(400).send("Request failed");
//   }
// });

module.exports = router;
