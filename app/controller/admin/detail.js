'use strict';
const fs=require('fs');
const pump = require('mz-modules/pump');
const BaseController = require('./base');
class DetailController extends BaseController {
    async index() {
        let { article_id,name } = this.ctx.query;
        let data = await this.ctx.model.Detail.find({"article_id":article_id});
       
        if(data.length > 0) {
            await this.ctx.render('/admin/detail/index',{
                name,
                article_id,
                list:data
            });
        } else {
            await this.ctx.render('/admin/detail/index',{
                article_id,
                list:[],
                name
            });
        }
       
    }
    async add() {
        let {article_id,name } = this.ctx.query;
        await this.ctx.render('/admin/detail/add',{
            name,
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
    async upload(){
        const { ctx } = this;
        // 这里开始处理图片上传逻辑
        // 省略上传逻辑代码
        // 根据图片上传返回的结果，按 editormd 要求格式返回
        ctx.body = {
          success : 1, // 0表示上传失败; 1表示上传成功
          message : "上传成功",
          url     : filepathNew.split(this.config.baseDir+'\\app')[1] // 上传成功时才返回
        }
    }
    //删除数据
    async delete(){
        let { id } = this.ctx.query;
        await this.deleteOne(id,'Detail');
        // await this.success(`/admin/detail?article_id=${article_id}`,"删除成功");
    }
}

module.exports = DetailController;
