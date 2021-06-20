const workout = require('../models/workout');
const db = require('../models');
const router = require('express').Router();

router.get('/api/workout', (req, res) => {
    db.workout.find({})
        .sort({ date: -1 })
        .then((workout) => {
            res.status(200).json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

router.get('/api/workout/range', (req, res) => {
    db.workout.find({})
        .sort({ date: -1 })
        .then((workout) => {
            res.status(200).json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post('/api/workout', (req, res) => {
    db.workout.create(req.body)
        .then((workout) => {
            res.status(200).json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put('/api/workout/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    db.workout.updateOne(
        { _id: id },
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
            res.status(400).json(err);
        })
})

module.exports = router;