const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5050;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlroutes")); 

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
});