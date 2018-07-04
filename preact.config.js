const path = require('path');

const appSrcPath = path.resolve(process.cwd(), 'src');

module.exports = (config, env, helpers) => {

  // resolve module paths
  config.resolve.modules = [...config.resolve.modules, appSrcPath];

  config.resolve.alias = {
    'react': 'preact-compat',
    'react-dom': 'preact-compat',
    // Not necessary unless you consume a module using `createClass`
    'create-react-class': 'preact-compat/lib/create-react-class'
  };

  if (env === 'development') {
    // show fullscreen error overlay
    config.devServer.overlay = true;
  }

};
