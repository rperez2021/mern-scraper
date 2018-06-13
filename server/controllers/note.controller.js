import Project from '../models/projects';
import Note from '../models/note'
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';


/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */

export function createNote(req, res) {
  Note.create(req.body)
  .then(function(dbNote) {
     return Project.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
  })
  .then(function(dbArticle) {
    res.json(dbArticle);
  })
  .catch(function(err) {
    res.json(err);
  });
}
