const Joi = require("joi");
const mongoose = require("mongoose");

const Person = mongoose.model(
  "Person",
  new mongoose.Schema({
    name: {
      type: String,
      trim: true
    },
    company: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      trim: true
    },
    age: {
      type: String,
      trim: true
    },
    balance: {
      type: String,
      trim: true
    }
  })
);

function validatePerson(person) {
  const schema = {
    //   title: Joi.string().min(5).max(50).required(),
    //   genreId: Joi.objectId().required(),
    //   numberInStock: Joi.number().min(0).required(),
    //   dailyRentalRate: Joi.number().min(0).required()
  };

  return Joi.validate(person, schema);
}

exports.Person = Person;
exports.validate = validatePerson;
