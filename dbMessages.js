import mongoose from 'mongoose'

const kokoroSchema = mongoose.Schema({
    message:String,
    name:String,
    timestamp: String,
    received:Boolean
});
//collection
export default mongoose.model('messagecontents', kokoroSchema);
