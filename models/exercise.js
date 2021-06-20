const mongoose = require('mongoose');

const schema = mongoose.Schema;

const exerciseSchema = new schema({
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number,
});

const exercise = mongoose.model('exercise', exerciseSchema);

module.exports = exercise;