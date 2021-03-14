const router = require("express").Router();
const Workout = require("../models/workout");

//post route for adding a workout
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((workoutAdded) => {
      res.json(workoutAdded);
    })
    .catch((err) => {
      res.json(err);
    });
});
//put route for updating a workout with an exercise
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
      req.params.id,
      {
        $push: { exercises: req.body },
      },
      { new: true, runValidators: true }
    
  )
  .then((workoutAdded) => {
    res.json(workoutAdded);
  })
  .catch((err) => {
    res.json(err);
  });
});
//get routes for getting all workouts

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

//get route for getting the last 7 workouts

router.get("/api/workouts/range", (req, res) => {
    Workout.find ({})
    .limit(7)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err)
    })
})

module.exports = router;
