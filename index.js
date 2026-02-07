import express from 'express';
import mongoose from "mongoose";

let mongoURI = "mongodb+srv://admin:1234@cluster0.6odnxti.mongodb.net/?appName=Cluster0"

mongoose.connect(mongoURI).then(
    ()=>{
        console.log("connected to mongo db")
    }
).catch(
    (error)=>{
        console.log("Error connecting mongo DB", error);
    }
)

let app=express();

app.use(express.json());



app.get('/',(req, res)=>{
    console.log('Get request received');
}
);

app.post('/',(req, res)=>{
    
    console.log(req.body);
    console.log("post request received")
    res.json("post request received")
}); 

app.put('/',()=>{
    console.log('Put request received');
});

app.delete('/',()=>{
    console.log('Delete request received');
});



app.listen(3000,()=>{
    console.log('Server is running on port 3000.....');
});