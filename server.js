//install packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

//logger
app.use(logger("dev"));

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstrack", { useNewUrlParser: true });

app.use(require('./routes/api-routes'));
app.use(require('.routes/html-routes'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});