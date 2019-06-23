const express = require('express')
const app = express()
const port = 3001


app.get('/',async (req, res) => {
    return res.send('Working');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))