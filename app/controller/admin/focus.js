'use strict';


const fs=require('fs');
const pump = require('mz-modules/pump');

const Controller = require('egg').Controller;
class FocusController extends Controller {
    async index() {
        let list = await this.ctx.model.Focus.find();
        await this.ctx.render('/admin/focus/index',{
            list
        });
    }
    async add() {
        await this.ctx.render('/admin/focus/add');
    }

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
        let admin =new this.ctx.model.Focus(Object.assign(files,parts.field));
        await admin.save();
        this.ctx.body = {
            code:200,
            msg:"增加轮播图成功"
        }
    }
}

module.exports = FocusController;