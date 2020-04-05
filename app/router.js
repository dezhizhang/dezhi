'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  //登录
  router.get('/admin/login',controller.admin.login.index);
  //首页
  router.get('/admin/home',controller.admin.home.index);
  //管理员管理
  router.get('/admin/manager',controller.admin.manager.index);
  router.get('/admin/manager/add',controller.admin.manager.add);
  router.post('/admin/manager/doAdd',controller.admin.manager.doAdd);
  //用户管理
  router.get('/admin/user/add',controller.admin.user.add);
  router.get('/admin/user',controller.admin.user.index);
  

  
  //图片管理
  router.get('/admin/focus',controller.admin.focus.index);
  router.get('/admin/focus/add',controller.admin.focus.add);
  router.post('/admin/focus/doAdd',controller.admin.focus.doAdd);
  

  //文章管理
  router.get('/admin/article',controller.admin.article.index);
  router.get('/admin/article/add',controller.admin.article.add);
  router.post('/admin/article/doAdd',controller.admin.article.doAdd);

  //文章详情
  router.get('/admin/detail',controller.admin.detail.index);
  router.get('/admin/detail/add',controller.admin.detail.add);
  router.post('/admin/detail/doAdd',controller.admin.detail.doAdd);
  router.post('/admin/detail/upload',controller.admin.detail.upload);




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
  router.get('/linux',controller.default.linux.index);
  //详情
  router.get('/detail',controller.default.detail.index);
};
