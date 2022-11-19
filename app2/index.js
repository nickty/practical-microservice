const express = require("express");
const app = express();

const { requireSignin } = require("./middlewares");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi Mizan from app2");
});

app.get("/getdata", requireSignin, (req, res) => {
  try {
    res.json({
      name: "Mizanur Rahman",
      location: "Dhaka, Bangladesh",
    });
  } catch (error) {
    res.send("Your don't have access");
  }
});

const port = 2000;
const host = "0.0.0.0";

app.listen(port, host);
console.log(`App2 is running on port: ${port}`);
