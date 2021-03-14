const router = require("express").Router();
const Workout = require("../models/workout")

//post route for adding a workout
router.post("/api/workouts", (req, res) => {
    Workout.create({}).then((workoutAdded) => {
        res.json(workoutAdded)
    }).catch((err) => {
        res.json(err)
    })
})
//put route for updating a workout with an exercise

//get routes for getting all workouts

//get route for getting the last 7 workouts




module.exports = router; 