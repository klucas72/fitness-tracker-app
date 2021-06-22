const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
            },
            name: {
                type: String,
            },
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        },
    ],
});


const Workout = mongoose.model('workout', workoutSchema);

// function totalDuration() {
//     Workout.aggregate([{ $addFields: { totalDuration: { $sum: "$duration" } } }]).then(data => {
//         console.log("data after adding total duration::: ", data);
//     })
// }
// return totalDuration

module.exports = Workout;