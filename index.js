import express from "express";
import connectDB from "./db.js";
import user from './routes/user.js';

const app = express();
connectDB();
app.use(express.json());

app.get('/check', (req, res) => {

    res.send("Hello");

})

app.use('/auth', user);

app.listen(5000, () => {
    console.log('App Running on port')
})