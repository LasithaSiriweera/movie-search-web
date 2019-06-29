require("dotenv").config({ path: "../.env" });

export default {
    server_port: process.env.REACT_APP_SERVER_PORT,
    redis_port: process.env.REDIS_PORT,
    omdb_url: process.env.OMDB_URL,
    omdb_api_key: process.env.OMDB_API_KEY
}