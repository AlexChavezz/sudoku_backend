const { Schema, model } = require('mongoose');

const ScoreSchema = new Schema({
    userName: {
        type: String,
        require: [ true, 'user name is required']
    },
    time: {
        type: {
            hours: Number,
            minutes: Number,
            secounds: Number            
        },
        require: [ true , 'time is required']
    },
    mode: {
        type: String, 
        require: [ true, 'mode is required']
    }
})


module.exports  =  model('Scores', ScoreSchema);