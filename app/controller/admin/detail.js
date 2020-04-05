'use strict';
const fs=require('fs');
const pump = require('mz-modules/pump');
const BaseController = require('./base');
class DetailController extends BaseController {
    async index() {
        let article_id = this.ctx.query.article_id;
        let data = await this.ctx.model.Detail.find({"article_id":article_id});
        if(data.length > 0) {
            await this.ctx.render('/admin/detail/index',{
                article_id,
                list:data
            });
        } else {
            await this.ctx.render('/admin/detail/index',{
                article_id,
                list:[{content:""}]
            });
        }
       
    }
    async add() {
        let article_id = this.ctx.query.article_id;
        await this.ctx.render('/admin/detail/add',{
            article_id
        });
    }
    async doAdd() {
        let data = this.ctx.request.body;
        let article_id = data.article_id;
        let result = await this.ctx.model.Detail.find({'article_id':article_id});
        if(result.length > 0) {
            await this.error(`/admin/detail?article_id=${article_id}`,'文章详情只能增加一条')
            return
        }
        let detail =new this.ctx.model.Detail(data);
        
        await detail.save();
        console.log('1');

        await this.success(`/admin/detail?article_id=${article_id}`,'增加文章详情成功');
    }
    async upload() {
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
            await this.service.tools.jimpImg(target,200,200)
        }
        this.ctx.body={
            link:files.file
        }
    }
}

module.exports = DetailController;
