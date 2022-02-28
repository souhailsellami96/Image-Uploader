const Uploader = require('./db/mongoose.js');
const express = require("express")
var cors = require('cors')
const  app = express()
app.use(cors())
const port = process.env.PORT || 3000;

const user = new Uploader({picture:'wrfw'});
user.save().then(()=> console.log('user saved'));
const multer = require('multer');
const getStream = require('get-stream')

  
const upload = multer({
  limits : {
    fileSize : 1000000
  }
})


app.post('/upload', upload.single('upload'), async (req,res) => {
    user.picture = req.file.buffer
    console.log(req)
    await user.save()
    console.log(user)
    res.send()
})
app.get('/image', async (req,res) => {
    console.log()
    res.set('Content-Type','image/png')
    res.send(user.picture)
    console.log(user.picture)
})

app.listen(3000)