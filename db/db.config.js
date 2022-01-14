const mongoose = require('mongoose');

const mongoDbConnecion =  () => {
    try {
         mongoose.connect(process.env.MONGO_DB);
         console.log('DB online');
    } catch (error) {
        console.log('DB ERROR')
        console.log(error)
    }
}
module.exports = mongoDbConnecion;