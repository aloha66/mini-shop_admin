const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

const alias = {
  'views':resolve('src/views'),
  'components':resolve('src/components'),
  'utils':resolve('src/utils'),
  'assets':resolve('src/assets'),
}
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.output.publicPath = './'
    config.resolve.alias = {...config.resolve.alias,...alias}
    return config;
  }