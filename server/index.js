const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi); //handles objectid validation
const mongoose = require("mongoose");
const express = require("express");
const people = require("./routes/people");
const cors = require("cors");
const app = express();

mongoose
  .connect("mongodb://localhost/people", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.log("Could not connect to MongoDB..", err));

app.use(express.json());
app.use(cors());
app.use("/api/people", people);
process.env.PORT = 4000;
const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));
