import express from 'express';
import mongoose from "mongoose";
import studentRouter from './router/studentRouter.js';
import teacherRouter from './router/teacherRouter.js';


const mongoURI = "mongodb+srv://admin:1234@cluster0.vt2ztsl.mongodb.net/?appName=Cluster0"

mongoose.connect(mongoURI).then(
    ()=>{
        console.log("connected to mongo db...")
    }
).catch(
    (error)=>{
        console.log("Error connecting mongo DB", error);
    }
)

const app=express();

app.use(express.json());

app.use("/students", studentRouter)

app.use("/teachers", teacherRouter)



app.listen(3000,()=>{
    console.log('Server is running on port 3000.....');
});