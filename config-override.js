/* config-overrides.js */
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.externals = {'config': JSON.stringify({
            apiUrl: 'http://localhost:8080',
        })};
    return config;
};