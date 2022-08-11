const mongoose = require('mongoose');

const DB_URI = "mongodb://localhost:27017/School-Management?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = () =>{
    mongoose.connect(process.env.DB_URI , ()=>{
        console.log("Connect to Mongo SuccessFully")
    })
}

module.exports = connectToMongo;