const express = require('express');
const router = express.Router();

const Program = require('../controllers/Program');

router
  .get('/id/:programId', Program.getProgram)
  .get('/all', Program.getAllPrograms)
  .get('/user/:userId', Program.getProgramByUser)
  .patch('/:programId', Program.updateProgram)
  .post('/create', Program.postProgram)
  .delete('/:programId', Program.deleteProgram);

module.exports = router;