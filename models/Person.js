const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Create a new Person schema
 */
var PersonSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  kudos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Kudos"
    }
  ]
});

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
