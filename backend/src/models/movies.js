import axios from 'axios';
import config from '../config';

class Movies {

    /**
     * search movies
     * @param keyWord 
     */
    async searchMovies(keyWord) {
        try {
            const data = await Promise.all([this.getMoviesByName(keyWord, 1),this.getMoviesByName(keyWord, 2)]);
            const movies = data.reduce((resArry, arr) => { return resArry.concat(arr); }, []);
            return movies;
        } catch (error) {
            throw error;
        }
    }

    /**
     * get movies using keyword
     * @param name 
     * @param page
     */
    async getMoviesByName(keyWord, page) {
        try {
            let data = [];
            const dataSnap = await axios.get(`${config.omdb_url}/?apikey=${config.omdb_api_key}&s=${keyWord}&page=${page}`);
            if (dataSnap && dataSnap.data && dataSnap.data.Search) {
                data = dataSnap.data.Search;
            }
            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default new Movies();