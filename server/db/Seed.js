const db  = require('./index.js');
const Program = require('./Program.js');
const Exercise = require('./Exercise.js');
const mongoose = require('mongoose');

const programs = [
  {"name": "Program 1", "numOfWeeks": 6, "userId": "612529d1b92de5165ad7b6c2"},
  {"name": "Program 2", "numOfWeeks": 6, "userId": "612529d1b92de5165ad7b6c2"},
  {"name": "Program 3", "numOfWeeks": 6, "userId": "612529d1b92de5165ad7b6c2"},
  {"name": "Program 4", "numOfWeeks": 6, "userId": "612529d1b92de5165ad7b6c2"},
  {"name": "Program 5", "numOfWeeks": 6, "userId": "612529d1b92de5165ad7b6c2"}
];

const exercises = [
  {"name": "Bench Press", "weight": 135, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "612529e2b92de5165ad7b6c4"},
  {"name": "Rear Delt Flies", "weight": 50, "reps": 5, "sets": 5, "days": ["Tuesday", "Thursday"], "programId": "612529e2b92de5165ad7b6c4"},
  {"name": "Tricep Extensions", "weight": 50, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "612529e2b92de5165ad7b6c4"},
  {"name": "Bicep Curls", "weight": 30, "reps": 5, "sets": 5, "days": ["Friday", "Saturday"], "programId": "612529e2b92de5165ad7b6c4"},
  {"name": "Bench Press", "weight": 135, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "612563f70a85d948243efc39"},
  {"name": "Rear Delt Flies", "weight": 50, "reps": 5, "sets": 5, "days": ["Tuesday", "Thursday"], "programId": "612563f70a85d948243efc39"},
  {"name": "Tricep Extensions", "weight": 50, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "612563f70a85d948243efc39"},
  {"name": "Bicep Curls", "weight": 30, "reps": 5, "sets": 5, "days": ["Friday", "Saturday"], "programId": "612563f70a85d948243efc39"},
  {"name": "Bench Press", "weight": 135, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "61256462e792744a33758a44"},
  {"name": "Rear Delt Flies", "weight": 50, "reps": 5, "sets": 5, "days": ["Tuesday", "Thursday"], "programId": "61256462e792744a33758a44"},
  {"name": "Tricep Extensions", "weight": 50, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "61256462e792744a33758a44"},
  {"name": "Bicep Curls", "weight": 30, "reps": 5, "sets": 5, "days": ["Friday", "Saturday"], "programId": "61256462e792744a33758a44"},
  {"name": "Bench Press", "weight": 135, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "61256462e792744a33758a45"},
  {"name": "Rear Delt Flies", "weight": 50, "reps": 5, "sets": 5, "days": ["Tuesday", "Thursday"], "programId": "61256462e792744a33758a45"},
  {"name": "Tricep Extensions", "weight": 50, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "61256462e792744a33758a45"},
  {"name": "Bicep Curls", "weight": 30, "reps": 5, "sets": 5, "days": ["Friday", "Saturday"], "programId": "61256462e792744a33758a45"},
  {"name": "Bench Press", "weight": 135, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "61256462e792744a33758a46"},
  {"name": "Rear Delt Flies", "weight": 50, "reps": 5, "sets": 5, "days": ["Tuesday", "Thursday"], "programId": "61256462e792744a33758a46"},
  {"name": "Tricep Extensions", "weight": 50, "reps": 5, "sets": 5, "days": ["Monday", "Wednesday"], "programId": "61256462e792744a33758a46"},
  {"name": "Bicep Curls", "weight": 30, "reps": 5, "sets": 5, "days": ["Friday", "Saturday"], "programId": "61256462e792744a33758a46"},
]

// const insertSampleData = function() {
//   Program.create(programs)
//     .then(() => mongoose.connection.close());
// };

// insertSampleData();

const insertExercises = function() {
  Exercise.create(exercises)
    .then(() => mongoose.connection.close());
};

insertExercises();