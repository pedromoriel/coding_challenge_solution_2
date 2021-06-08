const mongoose = require('mongoose');

const URI = 'mongodb://localhost/code_challenge_numbers';

mongoose.connect(URI)
    .then(db => console.log('DB Connection Success'))
    .catch(err => console.error(err));

module.exports = mongoose;