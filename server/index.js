const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js');
const db = require('../database/index.js')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('post ran')
  getReposByUsername(req.body.username)
  res.send('written to db');
  // res.statusCode()
  //TODO handle err and responses.
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log('GET WAS MADE')
  db.query((err, data) => res.send(data));
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

