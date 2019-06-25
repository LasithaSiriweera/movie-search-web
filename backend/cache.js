const redis = require('redis');

function cacheModule() {

    /**
     * create redis client
     */
    this.client = redis.createClient({
        host: 'redis-server',
        port: process.env.REDIS_PORT
    });

    /**
     * set cache
     */
    this.setCache = (key, data) => {
        this.client.setex(key, 3600, JSON.stringify({ source: 'Redis Cache', data: data, }));
    }
}

module.exports = cacheModule;