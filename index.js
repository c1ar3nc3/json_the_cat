const fetchBreedDescription = require('./breedFetcher');

const options = process.argv[2];

fetchBreedDescription(options, (err, description) => {
  if (err) {
    console.log('Error fetch details:', err);
  } else {
    console.log(description);
  }
});