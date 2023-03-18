const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeSchema = new Schema({
//     fromm: {
//     type: String,
//     required: true,
//   },
  tou: {
    type: String,
    required: true,
  },
  whenn: {
    type: String,
    required: true,
  },
  traveltype: {
    type: String,
    required: true,
  },
  guest: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});
const HomeForm = new mongoose.model("homeFormBooking", homeSchema);
module.exports = HomeForm;