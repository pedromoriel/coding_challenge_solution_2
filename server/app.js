const express = require('express');
const app = express();
const cors = require('cors');

const {mongoose} = require('./database/connection');

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes/numbersRoute'));

// Starting server
app.listen(app.get('port'), ()=> {
    console.log('Server on port ', app.get('port'));
});