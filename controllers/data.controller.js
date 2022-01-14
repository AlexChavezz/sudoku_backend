const Scores = require('../models/score');

const getData = (req, res) => {
    const bestEasyScores = Scores.find().limit(1);
    console.log(bestEasyScores);
}

const addNewRecord = async (req, res) => {
    const { userName, time, mode } = req.body;

    try {
        const score = new Scores({ userName, time, mode });
        await score.save();
        res.status(201).json({
            msg: 'Score has be registerd',
        });
    } catch (error) {
        return res.status(500).json({
            error: 'Internal server error'
        });
    }
}

module.exports = {
    getData,
    addNewRecord
}