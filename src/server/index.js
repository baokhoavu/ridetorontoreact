const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');
const os = require('os');

const app = express();
app.use(cors());


app.use(express.static('dist'));

// this is our MongoDB database
const dbRoute =
  'mongodb://heroku_q1rgmlhw:6i8hl61vlc9g6ikqjcijmgscpv@ds157614.mlab.com:57614/heroku_q1rgmlhw';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

const Schema = mongoose.Schema;

// var teamSchemaA = new Schema ({
// 	updated: String,
// 	teamName: String,
// 	goal: String,
// 	amountRaised: String,
// 	teamPageUrl: String,
// 	firstName: String,
// 	lastName: String,
// 	donationUrl: String,
// 	consId: String
// })

// var teamSchemaB = {
// 	updated: String,
// 	teamName: String,
// 	goal: String,
// 	amountRaised: String,
// 	teamPageUrl: String,
// 	firstName: String,
// 	lastName: String,
// 	donationUrl: String,
// 	consId: String
// })

// this is our get method
// this method fetches all available data in our database
app.get('/api/getData', (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});


// this is our update method
// this method overwrites existing data in our database
app.post('/api/updateData', (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
app.delete('/api/deleteData', (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
app.post('/api/putData', (req, res) => {
  let data = new Data();

  const { id, teamName, goal, amountRaised, teamPageUrl, firstName, lastName, donationUrl, consId, personalPageUrl } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: 'INVALID INPUTS',
    });
  }
  
  data.id = id;
  data.firstName = firstName;
  
  data.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
