const mongoose = require("mongoose");

const modelScheama = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },

  Email: {
    type: String,
    required: true,
  },
  From: {
    type: String,
    required: true,
  },
  To: {
    type: String,
    required: true,
  },
  Adults: {
    type: Number,
    required: true,
  },
  Childrens: {
    type: Number,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("travellingData", modelScheama);
