const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

const { Schema } = mongoose;

const customersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phonenumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    passportnumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    bookeddate: {
      type: Date,
      required: true,
      trim: true,
    },
    rooms: [{ type: Schema.Types.ObjectId, ref: "Rooms" }],
  },
  {
    timestamps: true,
  }
);
customersSchema.plugin(mongooseUniqueValidator);
const Customer = mongoose.model("Customer", customersSchema);

module.exports = Customer;
