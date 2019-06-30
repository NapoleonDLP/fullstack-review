const fs = require('fs');
const tls = require('tls');
const request = require('request');
const config = require('../config.js');
const db = require('../database/index.js');

let getReposByUsername = (username) => {
  console.log('REPOS BY USERNAME RAN')
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    method: 'GET',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, res, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res.body)

      db.save(res.body);
    }
  })
};

module.exports = getReposByUsername;