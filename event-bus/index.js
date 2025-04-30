const express = require("express");
const bodyPaser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyPaser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios
    .post("http://localhost:4000/events", event)
    .catch((error) =>
      console.error(`Failed to reach service on port 4000: ${error}`)
    );
  axios
    .post("http://localhost:4001/events", event)
    .catch((error) =>
      console.error(`Failed to reach service on port 4001: ${error}`)
    );
  axios
    .post("http://localhost:4002/events", event)
    .catch((error) =>
      console.error(`Failed to reach service on port 4002: ${error}`)
    );
  axios
    .post("http://localhost:4003/events", event)
    .catch((error) =>
      console.error(`Failed to reach service on port 4003: ${error}`)
    );

  res.status(200).send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.status(200).send(events);
});

app.listen("4005", () => {
  console.log("Listing on 4005");
});
