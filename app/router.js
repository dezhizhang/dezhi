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
  //用户管理
  router.get('/admin/user/add',controller.admin.user.add);
  router.get('/admin/user',controller.admin.user.index);
  
    //分类管理
  router.get('/admin/classify',controller.admin.classify.index);
    router.get('/admin/classify/add',controller.admin.classify.add);
  
    //图片管理
    router.get('/admin/picture',controller.admin.picture.index);
    router.get('/admin/picture/add',controller.admin.picture.add);
  
    //反馈管理
    router.get('/admin/feedback',controller.admin.feedback.index);
  
  
    //活动管理
    router.get('/admin/activity',controller.admin.activity.index);
    router.get('/admin/activity/add',controller.admin.activity.add);
  
    //赞助管理
    router.get('/admin/sponsor',controller.admin.sponsor.index);
    router.get('/admin/sponsor/add',controller.admin.sponsor.add);




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
