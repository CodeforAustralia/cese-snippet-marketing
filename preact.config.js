const path = require('path');

const appSrcPath = path.resolve(process.cwd(), 'src');

module.exports = (config, env, helpers) => {

  // resolve module paths
  config.resolve.modules = [...config.resolve.modules, appSrcPath];

  if (env === 'development') {
    // show fullscreen error overlay
    config.devServer.overlay = true;
  }

};
