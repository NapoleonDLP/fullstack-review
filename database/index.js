const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  html_url: String,
  forks: Number,
  owner: String
});

// The first argument is the singular name of the collection your model is for. ** Mongoose automatically looks for the plural, lowercased version of your model name. ** Thus, for the example above, the model Tank is for the tanks collection in the database.
var Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  repos = JSON.parse(repos);
  for (var i = 0; i < repos.length; i++) {
    let repo = repos[i];

    var doc = new Repo({
      id: repo.id,
      name: repo.name,
      html_url: repo.html_url,
      forks: repo.forks,
      owner: repo.owner.login
    });
    console.log(doc)
    Repo.findOneAndUpdate({id: doc.id}, doc, {upsert: true}, (err) => {
      console.log('***********');
      console.log(err);
      console.log('***********');
    });
    // doc.save();
  }
}
//condtion in {key: value}
let query = (cb) => {
  Repo.find().sort({forks: -1}).limit(25)
  // .then(results => cb())
  .then(results => {
    return cb(null, results)})
  .catch(err => console.log(err));
}

module.exports = {save, query}