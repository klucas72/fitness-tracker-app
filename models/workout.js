const mongoose = require('mongoose');
const exercise = require('./exercise');

const schema = mongoose.schema;

const workoutSchema = new schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: {
        type: schema.types.objectID,
        ref: exercise
    },
    totalDuration: {
        type: Number,
        default: 0
    }
})

const workout = mongoose.model('workout', workoutSchema);

module.exports = workout;