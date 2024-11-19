const mongoose = require('mongoose');
// const URI = "mongodb://127.0.0.1:27017/mern_admin" ;
const URI = process.env.MONGODB_URI ;
//XDOoww8CMf0KM90T
const connectDb = async () => {
    try {
       await mongoose.connect(URI) ;
       console.log('Connection Sucessful to DB')
    } catch (error) {
        console.error ("database connection failed");
        process.exit(0);
    }
};

module.exports = connectDb;
