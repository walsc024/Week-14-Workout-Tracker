const router = require("express").Router();
const path = require("path")

//route which will return exercises.html on /exercise
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})
//route that will return stats.html on /stats
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})


module.exports = router; 