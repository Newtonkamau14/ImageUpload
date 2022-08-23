const mongoose = require('mongoose');
const config = require('../../config');


const Connect = async () =>{
    try {
        const con = await mongoose.connect(config.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDb Database Connected')
    
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    

}

module.exports = Connect;

