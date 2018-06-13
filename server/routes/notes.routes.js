import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';
const router = new Router();


router.route('/projects/:id').post(NoteController.createNote);

export default router;
