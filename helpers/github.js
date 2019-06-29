const fs = require('fs');
const tls = require('tls');
const request = require('request');
const config = require('../config.js');
const save = require('../database/index.js');

let getReposByUsername = (username) => {

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
      save(res.body);
    }
  })
};

module.exports = getReposByUsername;