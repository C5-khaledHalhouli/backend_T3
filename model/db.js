const mongoose = require("mongoose")

const mongoDBClusterURI = "mongodb+srv://poplkh:7al7ouli@cluster0.6ibm9.mongodb.net/T3_BookClub?retryWrites=true&w=majority"

mongoose.connect(mongoDBClusterURI).then(()=>{
    console.log("DB is connected");
}).catch((err)=>{
    console.log(err);
})