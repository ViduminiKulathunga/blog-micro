const express = require("express");
const bodyPaser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyPaser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios
    .post("http://localhost:4000/events", event)
    .catch((error) => console.log(error));
  axios
    .post("http://localhost:4001/events", event)
    .catch((error) => console.log(error));
  axios
    .post("http://localhost:4002/events", event)
    .catch((error) => console.log(error));

  res.status({ status: "OK" });
});

app.listen("4005", () => {
    console.log("Listing on 4045");
})
