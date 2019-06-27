const redis = require('redis');
const config = require('./config');

function cacheModule() {

    /**
     * create redis client
     */
    this.client = redis.createClient({
        host: 'redis-server',
        port: config.redis_port
    });

    /**
     * set cache
     */
    this.setCache = (key, data) => {
        this.client.setex(key, 3600, JSON.stringify({ source: 'Redis Cache', data: data, }));
    }
}

module.exports = cacheModule;