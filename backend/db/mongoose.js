const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/uploader-api')
const {Schema} = mongoose ;
const uploaderSchema = new Schema({
    name :String ,
    picture :Buffer   
})
const Uplaoder = mongoose.model("Uploader",uploaderSchema)
module.exports = Uplaoder

