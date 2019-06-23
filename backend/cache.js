const redis = require('redis');


function cacheModule() {
    this.client = redis.createClient();
    
    /**
     * set cache
     */
    this.setCache = (key, data) => {
        this.client.setex(key, 3600, JSON.stringify({ source: 'Redis Cache', data : data, }));
    }

    /**
     * get cached data using key
     */
    this.getCachedDataByKey = async (key) => {
        return client.get(key, (err, result) => {
            if(err) {
                return null;
            } else {
                return result ? JSON.parse(result) : null;
            }
        });
    }

    this.flushAllCachedData = () => {

    }
  
}

module.exports = cacheModule;