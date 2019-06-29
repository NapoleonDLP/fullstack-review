const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = new mongoose.Schema({
  id: Number,
  name: String,
  html_url: String,
  forks: Number,
    owner: {
      login: String,
      url: String
    }
});

// The first argument is the singular name of the collection your model is for. ** Mongoose automatically looks for the plural, lowercased version of your model name. ** Thus, for the example above, the model Tank is for the tanks collection in the database.
var Repo = mongoose.model('Repo', repoSchema);

let save = async (repos) => {
  repos = JSON.parse(repos);
  for (var i = 0; i < repos.length; i++) {
    let repo = repos[i];

    var doc = new Repo({
      id: repo.id,
      name: repo.name,
      owner: {
        login: repo.owner.login,
        url: repo.owner.url
      },
      html_url: repo.html_url,
      forks: repo.forks
    });

    Repo.findOneAndUpdate({id: doc.id}, doc, {upsert: true}, (err) => {
      console.log('***********');
      console.log(err);
      console.log('***********');
    });
    // doc.save();
  }
}

module.exports = save;