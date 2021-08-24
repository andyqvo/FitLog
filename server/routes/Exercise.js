const express = require('express');
const router = express.Router();

const Exercise = require('../controllers/Exercise');

router
  .get('/:programId', Exercise.getExercise)
  .post('/create', Exercise.postExercise)
  .delete('/:exerciseId', Exercise.deleteExercise)

module.exports = router;