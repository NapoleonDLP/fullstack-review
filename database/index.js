const mongoose = require('mongoose');
//fetcher is the name of the database
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;

let repoSchema = mongoose.Schema({
  id: 'number',
  name:'string',
  html_url: 'string',
  forks: 'number',
    owner: {
      login: 'string',
      url: 'string'
    }
});

// The first argument is the singular name of the collection your model is for. ** Mongoose automatically looks for the plural, lowercased version of your model name. ** Thus, for the example above, the model Tank is for the tanks collection in the database.
let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  repos = JSON.parse(repos);
  for (var i = 0; i < repos.length; i++) {
    let repo = repos[i];
    var doc = new Repo({
      id: repo.id,
      name:repo.name,
      owner: {
        login: repo.owner.login,
        url: repo.owner.url
      },
      html_url: repo.html_url,
      forks: repo.forks
    });
    doc.save((err) => console.log(err));
  }
}
module.exports = save;