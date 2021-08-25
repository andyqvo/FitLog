const Program = require('../db/Program');
const mongoose = require('mongoose');

const getProgram = (req, res) => {
  const { programId } = req.params;
  Program.find({_id: programId})
    .then(program => res.status(200).send(program))
    .catch(err => res.status(400).send(err));
};

const getAllPrograms = (req, res) => {
  Program.find()
    .then(program => res.status(200).send(program))
    .catch(err => res.status(400).send(err));
};

const getProgramByUser = (req, res) => {
  const { userId } = req.params;
  Program.find({userId})
    .then(program => res.status(200).send(program))
    .catch(err => res.status(400).send(err));
};

const postProgram = (req, res) => {
  Program.create(req.body)
    .then(program => res.status(200).send(program))
    .catch(err => res.status(400).send(err));
};

const deleteProgram = (req, res) => {
  const { programId } = req.params;
  Program.deleteOne({_id: programId})
    .then(program => res.status(200).send(program))
    .catch(err => res.status(400).send(err));
};

const updateProgram = (req, res) => {
  const { programId } = req.params;
  const program = req.body;
  if (!mongoose.Types.ObjectId.isValid(programId)) {
    return res.status(400).send('No program found.');
  }
  Program.findByIdAndUpdate(programId, {...program, _id: programId}, {new: true})
    .then(program => res.status(200).send(program))
    .catch(err => res.status(400).send(err));
}

module.exports = {
  getProgram,
  getAllPrograms,
  getProgramByUser,
  postProgram,
  deleteProgram,
  updateProgram
};