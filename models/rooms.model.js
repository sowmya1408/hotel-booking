const mongoose = require("mongoose");
const RoomTypes = require("../types/roomTypes");

const { Schema } = mongoose;

const roomsSchema = new Schema(
  {
    roomtype: {
      type: String,
      enum: [
        RoomTypes.LUXURY_DOUBLE_ROOM,
        RoomTypes.DELUX_DOUBLE_ROOM,
        RoomTypes.LUXURY_SINGLE_ROOM,
        RoomTypes.DELUX_SINGLE_ROOM,
      ],
      required: true,
    },
    numberofrooms: {
      type: Number,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    addons: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  },
  {
    timestamps: true,
  }
);

const Rooms = mongoose.model("Rooms", roomsSchema);

module.exports = Rooms;
