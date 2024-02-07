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
    .then((movies) => res.json(movies))
    .catch((err) => console.error('error:' + err));
});
/*
router.get('/movies/:movieId', (req, res) => {
  const totalUrl = '';
  const urlConfig = 'https://api.themoviedb.org/3/configuration';
  const optionsConfig = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  };

  fetch(urlConfig, optionsConfig)
    .then((res) => res.json())
    .then((json) => (totalUrl += json.images.base_url))
    .catch((err) => console.error('error:' + err));

  const url = `https://api.themoviedb.org/3/movie/${req.params.movieId}/images`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  };

  fetch(url, options)
    .then((data) => data.json())
    .then((img) => console.log('images: ', img))
    .catch((err) => console.error('error:' + err));
  console.log('totalUrl: ', totalUrl);
});
*/
module.exports = router;
