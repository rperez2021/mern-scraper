import { Router } from 'express';
import * as ProjectController from '../controllers/project.controller';
const router = new Router();

// Get all Posts
router.route('/scrape').get(ProjectController.scrapeGithub);

// Get one post by cuid
router.route('/projects').get(ProjectController.getAllProjects);

// Add a new Post
router.route('/projects/:id').post(ProjectController.getOneProject);

// Delete a post by cuid
router.route('/projects/:id').delete(ProjectController.deleteProject);

router.route('/clean').get(ProjectController.deleteAll);

export default router;
