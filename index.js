import express from 'express';
import mongoose from "mongoose";
import userRouter from './router/userRouter.js';
import productRouter from './router/productRouter.js';
import jwt from "jsonwebtoken";


const mongoURI = "mongodb+srv://admin:1234@cluster0.vt2ztsl.mongodb.net/?appName=Cluster0";

mongoose.connect(mongoURI)
    .then(() => {
        console.log("connected to mongo db...");
    })
    .catch((error) => {
        console.log("Error connecting mongo DB", error);
    });

const app = express();

app.use(express.json());

app.use();

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000.....');
});
