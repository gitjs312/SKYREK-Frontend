import express from 'express';
import { getAllStudents } from '../controllers/studentController.js';
import { CreateStudents } from '../controllers/studentController.js';


const studentRouter = express.Router();

studentRouter.get('/', getAllStudents);

studentRouter.post('/', CreateStudents); 

export default studentRouter;