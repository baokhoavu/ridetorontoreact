/* config-overrides.js */

// module.exports = function override(config, env) {
//   //do stuff with the webpack config...
//   return config;
// }

const path = require('path');

module.exports = {
    paths: function (paths, env) {        
        paths.appIndexJs = path.resolve(__dirname, 'src/client/index.js');
        paths.appSrc = path.resolve(__dirname, 'src');
        return paths;
    },
}