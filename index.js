import mongoose from "mongoose";

export function connectionMongo(DB_NAME) {
  mongoose
    .connect(`mongodb://localhost:27017/${DB_NAME}`)
    .then(() => console.log("DB is connected"))
    .catch((err) => console.log(err));
}

// connectionMongo("NPM") 


export function sayName(name){
    return `My name is ${name}`
}