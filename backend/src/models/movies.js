import axios from 'axios';
import config from '../config';

class Movies {

    /**
     * search movies
     * @param keyWord 
     */
    async searchMovies(keyWord) {
        try {
            const page1 = await this.getMoviesByName(keyWord, 1);
            const page2 = await this.getMoviesByName(keyWord, 2);
            const movies = page1.concat(page2);
            return movies;
        } catch (error) {
            throw error;
        }
    }

    /**
     * get movies using key word
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