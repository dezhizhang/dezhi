'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //首页
  router.get('/', controller.default.home.index);
  router.get('/index',controller.default.home.index);
  //前端
  router.get('/client',controller.default.client.index);
  //服务端
  router.get('/server',controller.default.server.index);
  //移动
  router.get('/mobile',controller.default.mobile.index);
  //关于
  router.get('/about',controller.default.about.index);
  router.get('/small',controller.default.small.index);
  //详情
  router.get('/detail',controller.default.detail.index);
};
