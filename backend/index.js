require('dotenv').config({ path: '../.env' });
const express = require('express')
const app = express()
const cors = require("cors");
const Movie = require('./movies');
const cache = require('./cache');
const responseTime = require('response-time');
const movieModule = new Movie();
const cacheModule = new cache()
const port = process.env.APP_SERVER_PORT;

app.use(cors());
app.use(responseTime());

/**
 * search movies api function
 */
app.get('/api/search', async(req, res) => {
    try {
        const keyWord = req.query.keyword;
        // check whether cache is exist
        return cacheModule.client.get(keyWord, async(err, result) => {
            let responseArr = []
            if (result) {
                const resultJSON = JSON.parse(result);
                responseArr = resultJSON.data;
            } else {
                const movies = await movieModule.searchMovies(keyWord);
                cacheModule.setCache(keyWord, movies);
                responseArr = movies;
            }
            res.set('Cache-Control', 'max-age=30');
            return res.json(responseArr);
        });
    } catch (error) {
        return res.json([]);
    }
});

/**
 * api to clean cache
 */
app.get('/api/clear', (req, res) => {
    cacheModule.client.flushdb((err, succeeded) => {
        if (err) {
            res.send(err);
        } else {
            res.send(succeeded);
        }
    });
});


app.listen(port, () => console.log(`app listening on port ${port}!`))