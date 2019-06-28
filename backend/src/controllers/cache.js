import redis from 'redis';
import config from '../config';

const client = redis.createClient({
    host: 'redis-server',
    port: config.redis_port
});

const RedisCache = {

    /**
     * get search data from redis cache
     * @param req 
     * @param res 
     * @param next 
     */
    getDataFromCache(req, res, next) {
        client.get(req.query.keyword, (err, result) => {
            if (err) {
                return next();
            } else {
                if (!result) {
                    return next();
                } else {
                    const resultJSON = JSON.parse(result);
                    res.status(200).send(resultJSON.data);
                }
            }
        });
    },

    /**
     * Clear all the redis cache
     * @param req 
     * @param res 
     */
    flushAllCache(req, res) {
        client.flushdb((err, succeeded) => {
            if (err) {
                res.status(504).send(err);
            } else {
                res.status(200).send(succeeded);
            }
        });
    },

    /**
     * set cache data
     * @param res 
     * @param data 
     */
    setCache(key, data) {
        client.set(key, JSON.stringify({ source: 'Redis Cache', data: data, }));
    }
}

export default RedisCache;