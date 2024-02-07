var express = require('express');
var router = express.Router();
const apiKey = process.env.TMDB_API_KEY;
const fetch = require('node-fetch');

router.get('/movies', (req, res) => {
  const url =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  };

  fetch(url, options)
    .then((data) => data.json())
    .then((movies) => res.json({ movies: movies.results }))
    .catch((err) => console.error('error:' + err));
});

module.exports = router;
