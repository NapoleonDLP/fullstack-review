const fs = require('fs');
const tls = require('tls');
const request = require('request');
const config = require('../config.js');
const save = require('../database/index.js');

// const bodyParser = require('body-parser');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    method: 'GET',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  request(options, (err, res, data) => {
    if (err) {
      console.log(err);
    } else {
      //responseBody is an array of all that user info
      // console.log(res.body);
      save(res.body);
    }
  })
};

module.exports = getReposByUsername;