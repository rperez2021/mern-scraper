import Project from '../models/projects';
import Note from '../models/note';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';
import axios from 'axios';
import cheerio from 'cheerio'

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */

export function scrapeGithub(req, res) {
  axios.get("https://github.com/trending").then(function(response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);
  console.log(response.data)
      // Now, we grab every h2 within an article tag, and do the following:
      $("li").each(function(i, element) {
        // Save an empty result object
        var result = {};
  
        // Add the text and href of every link, and save them as properties of the result object
        result.title = $(this)
          .children("div")
          .children("h3")
          .children("a")
          .text();
        result.link = "https://github.com" + $(this)
        .children("div")
        .children("h3")
        .children("a")
          .attr("href");
        result.description = $(this)
        .children("div:nth-of-type(3)")
        .children("p")
        .text();
  
        // Create a new Article using the `result` object built from scraping
        Project.create(result)
          .then(function(dbArticle) {
            // View the added result in the console
            console.log(dbArticle);
          })
          .catch(function(err) {
            // If an error occurred, send it to the client
            return res.json(err);
          });
      });
  
      // If we were able to successfully scrape and save an Article, send a message to the client
      res.redirect('/')
    });
}


export function getAllProjects(req, res) {
  Project.find({})
      .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
}

export function getOneProject(req, res) {
  Project.findOne({ _id: req.params.id })
      // ..and populate all of the notes associated with it
      .populate("note")
      .then(function(dbArticle) {
        // If we were able to successfully find an Article with the given id, send it back to the client
        res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
}

export function deleteProject(req, res) {
  Project.findOne({ _id: req.params.id }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    Project.remove(() => {
      res.status(200).end();
    });
  });
}

export function deleteAll(req, res) {
  Project.collection.drop()
      Note.collection.drop()
      .catch(function(err) {
          res.json(err)
      })
        res.redirect('/')
}