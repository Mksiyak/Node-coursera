const mongoose = require('mongoose');

const Dishes = require('./models/dishes')

const url = "mongodb://127.0.0.1:27017";
const connect = mongoose.connect(url);

connect
.then((db) =>{
    console.log("connected to server correctly");

    Dishes.create({
        name: "Uthappizza",
        description : "test"
    })
    .then((dish)=>{
        console.log(dish);

        return Dishes.find({}).exec();
    })
    .then((dishes)=>{
        console.log(dishes);

        return Dishes.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) =>{
        console.log(err);
    });
});