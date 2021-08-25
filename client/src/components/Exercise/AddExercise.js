import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { TextField, Select, MenuItem, InputLabel, FormLabel, Button, makeStyles, Checkbox, FormGroup, FormControlLabel, FormControl, Grid } from '@material-ui/core';

import { createExercise } from '../../redux/actions/exercises';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const AddExercise = ({getExercises, programId}) => {

  const classes = useStyles();

  const dispatch = useDispatch();

  const initialState = {
    name: '',
    weight: '',
    sets: '',
    reps: '',
    days: []
  }

  const [exerciseForm, setExerciseForm] = useState(initialState);

  const handleChange = (e) => {
    setExerciseForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const handleDayChange = (e) => {
    if (e.target.checked) {
      setExerciseForm(prevState => ({
        ...prevState,
        days: [...prevState.days, e.target.value]
      }))
    } else {
      let filtered = exerciseForm.days.filter(day => day !== e.target.value);
      setExerciseForm(prevState => ({...prevState, days: filtered}));
    }
  }

  const handleSubmit = (e) => {
    if (exerciseForm.name && exerciseForm.weight && exerciseForm.sets && exerciseForm.reps && exerciseForm.days.length) {
      dispatch(createExercise({...exerciseForm, programId}));
      setExerciseForm(initialState);
    } else {
      alert('Invalid submission. Please fill in all blank fields.')
    }
  }

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item style={{paddingBottom: "20px"}}>
        <TextField className={classes.formField} name="name" variant="outlined" label="Exercise Name" onChange={handleChange} value={exerciseForm.name}/>
        <TextField className={classes.formField} name="weight" variant="outlined" label="Weight" type="number" onChange={handleChange} value={exerciseForm.weight}/>
        <TextField className={classes.formField} name="sets" variant="outlined" label="Sets" type="number" onChange={handleChange} value={exerciseForm.sets}/>
        <TextField className={classes.formField} name="reps" variant="outlined" label="Reps" type="number" onChange={handleChange} value={exerciseForm.reps}/>
      </Grid>
      <Grid item>
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel value="Monday" control={<Checkbox color="primary" />} label="Monday" labelPlacement="top" onChange={handleDayChange}/>
            <FormControlLabel value="Tuesday" control={<Checkbox color="primary" />} label="Tuesday" labelPlacement="top" onChange={handleDayChange}/>
            <FormControlLabel value="Wednesday" control={<Checkbox color="primary" />} label="Wednesday" labelPlacement="top" onChange={handleDayChange}/>
            <FormControlLabel value="Thursday" control={<Checkbox color="primary" />} label="Thursday" labelPlacement="top" onChange={handleDayChange}/>
            <FormControlLabel value="Friday" control={<Checkbox color="primary" />} label="Friday" labelPlacement="top" onChange={handleDayChange}/>
            <FormControlLabel value="Saturday" control={<Checkbox color="primary" />} label="Saturday" labelPlacement="top" onChange={handleDayChange}/>
            <FormControlLabel value="Sunday" control={<Checkbox color="primary" />} label="Sunday" labelPlacement="top" onChange={handleDayChange}/>
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <Button className={classes.formField} variant="outlined" onClick={handleSubmit}>Add Exercise</Button>
      </Grid>
    </Grid>
  )
}

export default AddExercise;