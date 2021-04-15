const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  console.log(config.node)
  
  config.node = {
    fs: 'empty',
    net: 'empty',
    child_process: 'empty',
    readline: 'empty'
  };

  console.log(config.node)

  return config;
};
