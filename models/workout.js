const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        type: Schema.Types.ObjectID,
        ref: 'exercise'
    }],
    totalDuration: {
        type: Number,
        default: 0
    }
})

const workout = mongoose.model('workout', workoutSchema);

module.exports = workout;