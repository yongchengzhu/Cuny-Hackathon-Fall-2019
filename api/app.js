const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const methodOverride = require('method-override');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

//---------------------------------------------------------------------------------------
// Middlewares
//---------------------------------------------------------------------------------------
app.use(cors());
app.use(express.json());
app.use(methodOverride('_method'));

//---------------------------------------------------------------------------------------
// Connect to to Mongodb server
//---------------------------------------------------------------------------------------
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose.set('useFindAndModify', false);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb installed succesfully');
});

//---------------------------------------------------------------------------------------
// Use routes
//---------------------------------------------------------------------------------------

app.use('/api', require('./controllers'));


//---------------------------------------------------------------------------------------
// Create Server Using port
//---------------------------------------------------------------------------------------
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

//---------------------------------------------------------------------------------------
// Background processes
//---------------------------------------------------------------------------------------

server.on('listening', () => {
 })
