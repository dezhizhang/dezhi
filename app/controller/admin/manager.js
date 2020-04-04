'use strict';

const Controller = require('egg').Controller;

class ManagerController extends Controller {
    async index() {
        await this.ctx.render('/admin/manager/index')
    }
    async add() {
        await this.ctx.render('/admin/manager/add');
    }
    //    //增加管理员
    //    async doAdd() {
    //     let result = this.ctx.request.body;
    //     result.password = await this.service.tools.md5(result.password);
    //     let adminResult = await this.ctx.model.Admin.find({'username':result.username});
    //     if(adminResult.length > 0) {
    //         await this.error('/admin/manager','当前管理员以存在');
    //     } else {
    //         let manager = new this.ctx.model.Admin(result);
    //         await manager.save();
    //         await this.success('/admin/manager','增加管理员成功');
    //     }
    // }
    async doAdd() {
        let parts = this.ctx.multipart({ autoFields: true });
        let files = {};               
        let stream;
        while ((stream = await parts()) != null) {
            if (!stream.filename) {          
                break;
            }       
            let fieldname = stream.fieldname;  //file表单的名字
            //上传图片的目录
            let dir=await this.service.tools.getUploadFile(stream.filename);
            let target = dir.uploadDir;
            let writeStream = fs.createWriteStream(target);
            await pump(stream, writeStream);  
            files=Object.assign(files,{
                [fieldname]:dir.saveDir    
            })
            
        }   
        console.log(parts.field);
        
        // await this.service.tools.md5(result.password);   
        let focus =new this.ctx.model.Focus(Object.assign(files,parts.field));
        let result=await focus.save();
        await this.success('/admin/focus','增加轮播图成功');
    }
}

module.exports = ManagerController;
