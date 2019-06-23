const express = require('express')
const app = express()
const port = 3001
const cors = require("cors");
const Movie = require('./movies');
const cache = require('./cache');
const responseTime = require('response-time');
const movieModule = new Movie();
const cacheModule = new cache()

app.use(cors());
app.use(responseTime());

/**
 * search movies api function
 */
app.get('/api/search', async (req, res) => {
  try {
    const keyWord = req.query.keyWord;
    return cacheModule.client.get(keyWord, async (err, result) => {
      if (result) {
        const resultJSON = JSON.parse(result);
        return res.json(resultJSON.data);
      } else {
        const movies = await movieModule.searchMovies(keyWord);
        cacheModule.setCache(keyWord, movies);
        return res.json(movies);
      }
    });
  } catch (error) {
    return res.json({});
  }
});

/**
 * api to clean cache
 */
app.get('/api/clear', (req, res) => {
  cacheModule.client.flushdb((err, succeeded) => {
    if(err) {
      res.send(err);
    } else {
      res.send(succeeded);
    }
  });
});


app.listen(port, () => console.log(`app listening on port ${port}!`))