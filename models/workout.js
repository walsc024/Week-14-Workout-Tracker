//require in mongoose

const mongoose = require("mongoose");

//declare a schema variable

const Schema = mongoose.Schema;

//create a workout schema

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Enter a tpye of workout",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for workout",
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
        required: "Enter a duration time",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        tpye: Number,
      },
    },
  ],
});

//define a model based on the schema above

const Workout = mongoose.model("Workout", workoutSchema);

//export it into the api routes

module.exports = Workout;
