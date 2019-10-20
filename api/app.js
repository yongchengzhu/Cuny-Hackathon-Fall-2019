const methodOverride = require('method-override');
const bodyParser     = require('body-parser');
const express        = require('express');
const app            = express();
const db             = require('./models').mongoose;
const path           = require('path');

//---------------------------------------------------------------------------------------
// Middlewares
//---------------------------------------------------------------------------------------
app.use(express.json());
app.use(methodOverride('_method'));

//---------------------------------------------------------------------------------------
// Use routes
//---------------------------------------------------------------------------------------
app.use('/api', require('./controllers'));

if(process.env.NODE_ENV==='production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // all unknown routes should be handed to our react app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

//---------------------------------------------------------------------------------------
// Create Server Using port
//---------------------------------------------------------------------------------------
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});

//---------------------------------------------------------------------------------------
// Background processes
//---------------------------------------------------------------------------------------
server.on('listening', () => {
});
