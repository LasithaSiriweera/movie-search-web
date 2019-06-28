import Movies from '../controllers/movies';
import RedisCache from '../controllers/cache';
import express from 'express';
var router = express.Router();


router.get('/search', Movies.validateKeyWord, RedisCache.getDataFromCache, Movies.getMoviesFromApi, (req, res) => {
    res.status(200).json(res.locals.response);
});

router.get('/clear', RedisCache.flushAllCache, (req, res) => {
    res.send(res);
});



export default router;