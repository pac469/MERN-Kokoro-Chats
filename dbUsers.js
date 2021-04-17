import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    userName:String,
    email:String,
    rooms:[String]
})
//collection
export default mongoose.model('usercontents', userSchema);