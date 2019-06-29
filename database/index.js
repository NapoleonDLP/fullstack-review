const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({

  id: Number,
  name:String,
  owner: {
    login: String,
    url: String
  },
  html_url: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  //declare repo here
  // iterate through repos
  //for every repo extract values and add to repo schema
  //use save() to save that model in the db

}

module.exports.save = save;