const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

//const config = {
//    app: {
//        port: process.env.PORT || 3000,
//    }
//};
    
module.exports = config;

async function startServer(){
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Connected to the database!");
        
        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${8080}`);
        }); 
    } catch (error) {
        console.log ("Cannot connect to the database!", error);
        process.exit();
    }
}

startServer();