'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  //登录
  router.get('/admin/login',controller.admin.login.index);
  router.get('/admin/verify',controller.admin.base.verify);
  router.post('/admin/doLogin',controller.admin.login.doLogin);
  //首页
  router.get('/admin/home',controller.admin.home.index);
  //管理员管理
  router.get('/admin/manager',controller.admin.manager.index);
  router.get('/admin/manager/add',controller.admin.manager.add);
  router.post('/admin/manager/doAdd',controller.admin.manager.doAdd);
  router.get('/admin/manager/delete',controller.admin.manager.delete);
  //用户管理
  router.get('/admin/user/add',controller.admin.user.add);
  router.get('/admin/user',controller.admin.user.index);
  

  
  //图片管理
  router.get('/admin/focus',controller.admin.focus.index);
  router.get('/admin/focus/add',controller.admin.focus.add);
  router.post('/admin/focus/doAdd',controller.admin.focus.doAdd);
  router.get('/admin/focus/delete',controller.admin.focus.delete);
  

  //文章管理
  router.get('/admin/article',controller.admin.article.index);
  router.get('/admin/article/add',controller.admin.article.add);
  router.post('/admin/article/doAdd',controller.admin.article.doAdd);
  router.get('/admin/article/delete',controller.admin.article.delete);

  //文章详情
  router.get('/admin/detail',controller.admin.detail.index);
  router.get('/admin/detail/add',controller.admin.detail.add);
  router.post('/admin/detail/doAdd',controller.admin.detail.doAdd);
  router.post('/admin/detail/upload',controller.admin.detail.upload);
  router.get('/admin/detail/delete',controller.admin.detail.delete);

  //友情管理
  router.get('/admin/friendship',controller.admin.friendship.index);
  router.get('/admin/friendship/add',controller.admin.friendship.add);
  router.post('/admin/friendship/doAdd',controller.admin.friendship.doAdd);
  router.get('/admin/friendship/delete',controller.admin.friendship.delete);




  //首页
  router.get('/', controller.default.home.index);
  router.get('/index',controller.default.home.index);
  //前端
  router.get('/client',controller.default.client.index);
  //服务端
  router.get('/server',controller.default.server.index);
  //数据库
  router.get('/data',controller.default.data.index);
  
  //移动
  router.get('/mobile',controller.default.mobile.index);
  //关于
  router.get('/about',controller.default.about.index);
  router.get('/linux',controller.default.linux.index);

  //详情
  router.get('/detail',controller.default.detail.index);
  //登录
  router.get('/login',controller.default.login.index);
  //登录提交
  router.post('/doLogin',controller.default.login.doLogin);
  //注册
  router.get('/register',controller.default.register.index);
  //注册提交
  router.post('/doRegister',controller.default.register.doRegister);
  //申请友情
  router.get('/apply',controller.default.apply.index);
  router.post('/apply/doApply',controller.default.apply.doApply);
};
