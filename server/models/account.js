import mongoose from "mongoose";

const Schema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 0
   }
}, {
    timestamps: true
});

const user = mongoose.model('user', Schema);

export default user;