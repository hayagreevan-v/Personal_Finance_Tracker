import transaction from "../models/transaction.js";
import user from "../models/account.js";
import isLoggedIn from "../middlewares/isLoggedin.middleware.js";
import express from "express";

const router = express.Router();

//create a new get route to get all transactions
router.get('/', isLoggedIn, async (req, res) => {
    try {
        const transactions = await transaction.find({ username: req.user.username });
        res.json(transactions);
    } catch (error) {
        res.status(400).json({ error });
    }
});

//create a new post route to add a new transaction
router.post('/add', isLoggedIn, async (req, res) => {
    try {
        console.log(req.body);
        req.body.username = req.user.username;
        console.log(req.body);
        const newTransaction = await transaction.create(req.body);
        console.log(req.body);

        user.findOne({ 
                username: req.user.username
            }).then( async(updatedEntry) => {
                console.log(req.body.mode);
                if(req.body.mode === "credit") {
                    console.log(updatedEntry.balance, req.body.amount);
                    updatedEntry.balance = updatedEntry.balance + req.body.amount;
                } else if (req.body.mode === "debit") {
                    updatedEntry.balance = updatedEntry.balance - req.body.amount;
                }
                
                updatedEntry.save().then(() => console.log("Balance updated"));
            });

        newTransaction.save().then(() => console.log("Transaction added"));
        res.json(newTransaction);

    } catch (error) {
        res.status(400).json({ error });
    }
});

//create a new post route to delete a transaction
router.post('/delete/:id', isLoggedIn, async (req, res) => {
    try {
        var flag = true;
        transaction.findById(req.params.id)
            .then((entry) => {
                if(entry !== null) {
                    if(entry.username !== req.user.username) {
                        res.status(401).json({ error: "Unauthorized" });
                        flag = false;
                        return;
                    }
                } else {
                    res.status(404).json({ error: "Transaction not found" });
                    flag = false;
                    return;
                }
            }).catch((error) => {console.log(error);});

        if(flag) {
            transaction.findByIdAndDelete(
                req.params.id
            ).then(() => {
                console.log("Transaction deleted");
                res.json({ message: "Transaction deleted" });
            });
            
        }

    } catch (error) {
        console.log(error);
    }
});

export default router;