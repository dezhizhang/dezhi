'use strict';
const url = require('url');
module.exports = (opt,app) => {
    return async function auth(ctx,next) {
        //配置安全验证
        ctx.state.csrf = ctx.csrf;
        ctx.state.userInfo = ctx.userInfo || {};
        ctx.state.friendship = ctx.friendship;
        ctx.state.adminInfo = ctx.session.adminInfo;
        //上一页地址
        ctx.state.prevPage = ctx.request.headers['referer'];
        //获取url
        const pathname =url.parse(ctx.request.url).pathname ;
        if(ctx.session.adminInfo) {
            await next();
        } else {
            if(pathname == '/admin/login' || pathname == '/admin/doLogin' || pathname == '/admin/verify') {
                await next();
            } else {
                ctx.redirect('/admin/login');
            }
        }
    }
}