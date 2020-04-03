'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.default.home.index);
  router.get('/index',controller.default.home.index);
  router.get('/client',controller.default.client.index);
  router.get('/server',controller.default.server.index);
  router.get('/mobile',controller.default.mobile.index);
  router.get('/about',controller.default.about.index);
};
