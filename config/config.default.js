/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585803604721_581';

  // add your middleware config here
  config.middleware = [];

  //配置ejs
  exports.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  //配置数据库
  config.mongoose = {
    client:{
      url:'mongodb://127.0.0.1:27017/dezhi',
      options:{}
    }
  }

  //关闭csrf
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
