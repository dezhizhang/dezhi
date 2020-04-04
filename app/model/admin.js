module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const d = new Date();
    const AdminSchema = new Schema({
        username:{ type:String },
        password:{ type:String },
        photo:{ type:String },
        email:{ type:String },
        description:{ type:String },
        add_time:{
            type:Number,
            default:d.getTime()
        },

    });
    return mongoose.model('Admin',AdminSchema,'admin');
}