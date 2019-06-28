import MoviesModel from '../models/movies';
import RedisCache from '../controllers/cache';

const Movies = {

    /**
     * Get movies from OMDB
     * @param req 
     * @param res 
     */
    async getMoviesFromApi(req, res) {
        try {
            const movies = await MoviesModel.searchMovies(req.query.keyword);
            if (movies.length > 0) {
                RedisCache.setCache(req.query.keyword, movies);
            }
            res.set('Cache-Control', 'max-age=30');
            res.status(200).json(movies);
        } catch (error) {
            res.status(504).send({ 'message': 'Internal Server Error' });
        }
    },

    /**
     * Check whether keyword is exist
     * @param req 
     * @param res 
     * @param next 
     */
    validateKeyWord(req, res, next) {
        try {
            if (req.query.keyword) {
                return next();
            } else {
                res.status(400).send({ 'message': 'Bad request' });
            }
        } catch (error) {
            res.status(504).send({ 'message': 'Internal Server Error' });
        }
    }
}

export default Movies;