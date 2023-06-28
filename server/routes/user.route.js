import account from "../models/account.js";
import express from "express";
import bcrypt from 'bcryptjs';

import { createToken, comparePassword, maxAge } from "../modules/jwt-auth.module.js";
import isLoggedIn from "../middlewares/isLoggedin.middleware.js";

const router = express.Router();

//create a new post route to signup
router.post('/signup', async (req, res) => {
    try {
        // hash the password
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const newUser = await account.create(req.body);
        console.log(req.body);
        
        newUser.save().then(() => console.log("User added"));
        res.json(newUser);
    } catch (error) {
        res.status(400).json({ error });
    }
});

//create a new post route to login
router.post('/login', async (req, res) => {
    try{
        const user_detail = await account.findOne({ username: req.body.username });

        if (user_detail) {

            const valid = await comparePassword(req.body.password, user_detail.password)
            if (valid) {

                const token = createToken({ username: req.body.username });
                //send cookie with token
                res.cookie('jwt', token, { httpOnly: true, maxAge: (maxAge * 1000) });
                res.status(200).json({
                    username: req.body.username
                });

            } else {
                //send cookie with empty token
                res.cookie('jwt', '', { httpOnly: true, maxAge: 1 });
                res.status(401).json({
                    error: "invalid password"
                });
            }

        } else { 
            //send cookie with empty token
            res.cookie('jwt', '', { httpOnly: true, maxAge: 1 });
            res.status(401).json({
                error: "invalid username"
            });
        }

    } catch (error){
        //send cookie with empty token
        res.cookie('jwt', '', { httpOnly: true, maxAge: 1 });
        res.status(400).json({ error });
    }
});

// create a new get route to get all transactions
router.get('/', isLoggedIn, async (req, res) => {
    try {
        const user_detail = await account.findOne({ username: req.user.username });
        res.status(200).json(user_detail);
    } catch (error) {
        res.status(400).json({ error });
    }
})
export default router;