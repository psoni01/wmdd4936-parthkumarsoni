const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StarSchema = new Schema({
  title: { type: String, required: true, maxLength: 30 },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  matches: { type: Number, required: true },
  wins: { type: Number, required: true },
  defeats: { type: Number, required: true },
});

StarSchema.virtual("winPercentage").get(function () {
  return ((this.wins / this.matches) * 100).toFixed(2);
});

StarSchema.set("toObject", { virtuals: true });
StarSchema.set("toJSON", { virtuals: true });

const Star = mongoose.model("Star", StarSchema);

module.exports = Star;
