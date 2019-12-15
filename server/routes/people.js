const { Person, validate } = require("../models/person");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const people = await Person.find().sort("name");
  res.send(people);
});

router.get("/:id", async (req, res) => {
  console.log("req.params.id", req.params.id);
  const person = await Person.findById(req.params.id);
  console.log("server person", person);
  if (!person) {
    return res.status(404).send("The person with the given ID was not found.");
  }
  res.send(person);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  // const { error } = validate(req.body);
  // if (error) {
  //   return res.status(400).send(error.details[0].message);
  // }
  let person = new Person({
    name: req.body.name,
    company: req.body.company,
    age: req.body.age,
    email: req.body.email,
    balance: req.body.balance
  });
  console.log(person);
  person = await person.save();
  res.send(person);
});

router.put("/:id", async (req, res) => {
  // const { error } = validate(req.body);
  // if (error){
  //   return res.status(400).send(error.details[0].message);
  // }
  const person = await Customer.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      company: req.body.company,
      age: req.body.age,
      email: req.body.email,
      balance: req.body.balance
    },
    { new: true }
  );

  if (!person) {
    return res.status(404).send("The person with the given ID was not found.");
  }

  res.send(person);
});

//delete person api
router.delete("/:id", async (req, res) => {
  const person = await Person.findByIdAndRemove(req.params.id);

  if (!person) {
    return res.status(404).send("The person with the given ID was not found.");
  }

  res.send(person);
});

module.exports = router;
