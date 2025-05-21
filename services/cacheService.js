const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 30 });
const getFromCache = (key) => {
    return cache.get(key);
};

const setInCache = (key, value) => {
    cache.set(key, value);
};

const delFromCache = (key) => {
    cache.del(key);
};

module.exports = {
    getFromCache,
    setInCache,
    delFromCache,
};
