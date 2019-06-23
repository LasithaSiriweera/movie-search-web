const express = require('express')
const app = express()
const port = 3001
const cors = require("cors");
const Movie = require('./movies');

const movieModule = new Movie();

app.use(cors());

app.get('/api/search', async (req, res) => {
    try {
        const keyWord = req.query.keyWord;
        const movies = await movieModule.searchMovies(keyWord);
        return res.json(movies);
    } catch (error) {
        return res.json({});
    }
});



app.listen(port, () => console.log(`app listening on port ${port}!`))