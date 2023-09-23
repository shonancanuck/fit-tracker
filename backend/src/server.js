const express = require("express");
// const path = require("path");
const cors = require("cors");
const knex = require("../db/knex");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const store = new KnexSessionStore({ knex });
const passport = require("passport");

const allowedOrigins = ["http://localhost:3000"];
const allowedMethods = ["GET", "POST", "PATCH", "DELETE"];
const PORT = process.env.PORT || 3001;

// Routes
const exercise = require("./controller/exercise");
const user = require("./controller/user");
const userHistory = require("./controller/history");

const app = express();
app.use(express.json());
app.use(
  cors({ origin: allowedOrigins, methods: allowedMethods, credentials: true })
);
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", express.static("public"));

app.use("/exercise", exercise);
app.use("/user", user);
app.use("/history", userHistory);

app.get("/", (req, res) => res.send("Hello!"));

app.listen(PORT, () => console.log(`Express app running on port ${PORT}!`));
