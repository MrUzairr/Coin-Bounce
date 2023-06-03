const mongoose  = require("mongoose");
const {MONGODB_CONNECTION_STRING} = require('../config/index')
const dbConnection = async () =>{
    try {
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect(MONGODB_CONNECTION_STRING);
        console.log(`Database Connected to Host: ${conn.connection.host}`); 
    } catch (error) {
        console.log(`Error:${error}`);
    }
}

module.exports = dbConnection;