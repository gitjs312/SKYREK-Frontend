import Teacher from "../models/teacher.js";

export function getAllTeachers(req, res){
    Teacher.find().then(
        (result)=>{
            res.json(result) 
    });
}

export function CreateTeachers(req, res){    
    const newTeacher = new Teacher({
        name:req.body.name,
        school:req.body.school
    });
    newTeacher.save().then(
        (result)=>{
            res.json({
                message:"Teacher created successfully",
                teacher:result
            }) 
        }
    );
}

