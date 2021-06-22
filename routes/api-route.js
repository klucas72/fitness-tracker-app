const Workout = require('../models/workout');
const db = require('../models');
const router = require('express').Router();

router.get('/api/workouts', (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then((workout) => {
            res.status(200).json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then((workout) => {
            res.status(200).json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then((workout) => {
            res.status(200).json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put('/api/workouts/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id);
    Workout.findByIdAndUpdate(
        id,
        {
            $push: {
                exercises: { ...body },
            },
        }
    )
        .then((workout) => {
            res.status(200).json(workout);
        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router;