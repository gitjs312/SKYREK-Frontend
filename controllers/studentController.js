import Student from "../models/student.js";

export function getAllStudents(req, res){
    Student.find().then(
        (result)=>{
            res.json(result) 
    }); 
}

export function CreateStudents(req, res){    
    const newStudent = new Student({
        name:req.body.name,
        city:req.body.city,
        age:req.body.age
    });
    newStudent.save().then(
        ()=>
            res.json({
                message:"new student created successfully"
            })
    )
}