import express from 'express';
import { CreateTeachers} from '../controllers/teacherController.js';
import { getAllTeachers } from '../controllers/teacherController.js';


const teacherRouter = express.Router();

teacherRouter.get('/', getAllTeachers)

teacherRouter.post('/', CreateTeachers)

export default teacherRouter


