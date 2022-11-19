const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { register, login } = require("./controller/user");

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("Error", err));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi Mizan from app1 dfsd");
});

app.post("/register", register);
app.post("/login", login);

const port = 1000;
const host = "0.0.0.0";

app.listen(port, host);
console.log(`App1 is running on port: ${port}`);
