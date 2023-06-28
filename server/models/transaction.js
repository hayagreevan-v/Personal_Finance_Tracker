import mongoose from "mongoose";

const Schema = mongoose.Schema({
   
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: "No description provided"
    },
    mode: {
        type: String,
        required: true,
        //enum: ["credit", "debit"]
    }, 
    username: {
        type: String,
    },   
    
}, {
    timestamps: true
});

const transaction = mongoose.model('transaction', Schema);

export default transaction;