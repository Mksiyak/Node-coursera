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

        return Dishes.findByIdAndUpdate(dish._id,{
            $set:{description: "updated test"},
        },{
            new:true
        });
    })
    .then((dish)=>{
        console.log(dish);

        dish.comments.push({
            rating: 5,
            comment: "Test comment",
            author: "Mksiyak"
        });
        return dish.save();
    })
    .then((dish)=>{
        console.log(dish);

        return Dishes.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) =>{
        console.log(err);
    });
});