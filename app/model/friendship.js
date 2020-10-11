module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const d = new Date();
    const FriendshipSchema = new Schema({
        name:{ type:String },
        link:{ type:String },
        description:{ type:String },
        add_time:{
            type:Number,
            default:d.getTime()
        },
    });
    return mongoose.model('Friendship',FriendshipSchema,'friendship');
}