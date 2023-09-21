const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const bookmarkController = require("./controllers/bookmarkController");
app.use("/bookmark", bookmarkController);

app.get("/", (req, res) => {
  res.send("home route");
});

const PORT = process.env.port || 8080;
app.listen(PORT, () => console.log("listening on", PORT));
