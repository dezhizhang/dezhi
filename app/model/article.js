module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const d = new Date();
    const ArticleSchema = new Schema({
        name:{ type:String },
        classify:{ type:String },
        img:{ type:String },
     
        description:{ type:String },
        add_time:{
            type:Number,
            default:d.getTime()
        },

    });
    return mongoose.model('Article',ArticleSchema,'article');
}