const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtsById,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtsController');

// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThoughts);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
 .get(getThoughtsById)
  .put(updateThoughts)
  .delete(deleteThoughts);

// Post at /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtsId/reactions')
  .post(createReaction);

  router
  .route('/:thoughtsId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
