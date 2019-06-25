const axios = require('axios');

function movieModule() {

    /**
     * search movies
     * @param keyWord 
     */
    this.searchMovies = async(keyWord) => {
        try {
            const page1 = await getMoviesByName(keyWord, 1);
            const page2 = await getMoviesByName(keyWord, 2);
            const movies = page1.concat(page2);
            return movies;
        } catch (error) {
            return [];
        }
    }

    /**
     * get movies using key word
     * @param name 
     * @param page 
     */
    getMoviesByName = async(keyWord, page) => {
        try {
            let data = [];
            const dataSnap = await axios.get(`http://www.omdbapi.com/?apikey=83f14c69&s=${keyWord}&page=${page}`);
            if (dataSnap && dataSnap.data && dataSnap.data.Search) {
                data = dataSnap.data.Search;
            }
            return data;
        } catch (error) {
            return [];
        }
    }

}

module.exports = movieModule;