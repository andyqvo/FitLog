import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import AddExercise from './AddExercise';
import ExerciseList from './ExerciseList';
import { getExercises } from '../../redux/actions/exercises';

const Exercise = ({match}) => {

  const programId = match.params.programId;

  const dispatch = useDispatch();

  const exercises = useSelector(state => state.exercises);

  const weekdays = {
    '1': 'Monday',
    '2': 'Tuesday',
    '3': 'Wednesday',
    '4': 'Thursday',
    '5': 'Friday',
    '6': 'Saturday',
    '7': 'Sunday',
  };

  const date = new Date();
  const day = weekdays[date.getDay().toString()];

  const activeExercises = exercises.filter(exercise => exercise.days.indexOf(day) !== -1);
  const unactiveExercises = exercises.filter(exercise => exercise.days.indexOf(day) === -1);

  useEffect(() => {
    dispatch(getExercises(programId));
  }, []);

  return (
    <div>
      <AddExercise programId={programId} getExercises={getExercises}/>
      <div style={{padding: "50px"}}>
        <ExerciseList name="Today's Exercises" exercises={activeExercises}/>
      </div>
      <div style={{padding: "50px"}}>
        <ExerciseList name="Rest of the Week" exercises={unactiveExercises}/>
      </div>
    </div>
  )
}

export default Exercise;

