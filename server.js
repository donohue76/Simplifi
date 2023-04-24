const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

const app = express();
const process = require('process');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: "your_secret_key", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/api/users", require("./routes/users"));

const port = process.argv.indexOf('--port') !== -1 ? process.argv[process.argv.indexOf('--port') + 1] : 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});