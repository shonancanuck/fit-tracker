const express = require("express");
const path = require("path");

const cors = require("cors");
const allowedOrigins = ["http://localhost:3000"];
const allowedMethods = ["GET", "POST"];
const port = process.env.PORT || 3001;

// Routes
const exercise = require("./controller/exercise");
const user = require("./controller/user");
const userHistory = require("./controller/history");

const app = express();
app.use(express.json());
app.use(cors({ origin: allowedOrigins, methods: allowedMethods }));
app.use("/", express.static("public"));
app.use("/exercise", exercise);
app.use("/user", user);
app.use("/user/history", userHistory);

app.get("/", (req, res) => res.send("Hello!"));

app.listen(port, () => console.log(`Express app running on port ${port}!`));
