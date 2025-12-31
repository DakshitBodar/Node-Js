const mongoose = require('mongoose');

const dbconnect = () => {
    mongoose.connect("mongodb+srv://BodarDakshit:dakshit3011@cluster0.jilqa1w.mongodb.net/movie")
        .then(() => console.log('DB is Connected !!'))
        .catch((err) => console.log(err))
}

module.exports = dbconnect;