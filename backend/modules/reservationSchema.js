import mongoose from "mongoose"; 
import validator from "validator";

const reservationSchema  = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "Name should be 3+ words"],
        maxLength: [30,"name contain characret between 3-30"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Name should be 3+ words"],
        maxLength: [30,"name contain characret between 3-30"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Enter valid email"]
    },
    phone: {
        type: String,
        minLength: [10, "enter valid number"],
        maxLength: [10,"enter valid number"],
    },
  time : {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    },
})

export const Reservation = mongoose.model("Reservation", reservationSchema)