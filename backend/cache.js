const redis = require('redis');


function cacheModule() {
    this.client = redis.createClient();

    /**
     * set cache
     */
    this.setCache = (key, data) => {
        this.client.setex(key, 3600, JSON.stringify({ source: 'Redis Cache', data: data, }));
    }
}

module.exports = cacheModule;