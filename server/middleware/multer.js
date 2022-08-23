const multer = require('multer')

//Set storage
var storage = multer.diskStorage({
    destination: function(req,res,callback){
        callback(null,'uploads')
    },
    filename: function(req,file,callback){
        //Get extension
        var ext = file.originalname.substring(file.originalname.lastIndexOf('.'));

        callback(null,file.fieldname + '-' + Date.now() + ext)
    }
})

module.exports = store = multer({ storage: storage});