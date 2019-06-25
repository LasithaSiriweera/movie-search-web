require('dotenv').config({ path: '../.env' });
module.exports = {
    api_key: process.env.OMDB_API_KEY,
    server_port: process.env.APP_SERVER_PORT,
    redis_port: process.env.REDIS_PORT
}