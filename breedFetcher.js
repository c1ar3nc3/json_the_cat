const request = require('request');

//endpoint -> https://api.thecatapi.com/v1/breeds/search.

const options = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${options}`, (err, response, body) => {
    const data = JSON.parse(body);
    if (err) {
      callback(err, null);
    } else if (data[0] === undefined) {
      console.log("Error: Cat not found");
    } else {
      const description = data[0].description;
      console.log(description);
    }
  });
};

module.exports = fetchBreedDescription;