module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const d = new Date();
    const DetailSchema = new Schema({
        files:{ type:Array },
        article_id:{ type:String },
        content:{ type:String },
        add_time:{
            type:Number,
            default:d.getTime()
        },

    });
    return mongoose.model('Detail',DetailSchema,'detail');
}