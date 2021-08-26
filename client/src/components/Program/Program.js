import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { getProgramsByUser, getPrograms } from '../../redux/actions/programs';
import CreateProgram from './CreateProgram';
import ProgramList from './ProgramList';

const Program = ({currentId, setCurrentId}) => {

  const dispatch = useDispatch();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem('profile'));
  const id = user?.result.googleId || user?.result._id;

  const programs = useSelector(state => state.programs);

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(getProgramsByUser(id));
    } else {
      dispatch(getPrograms());
    }
  }, [location]);


  if (!user?.result?.name) {
    return (
      <Paper style={{paddingBottom: "20px"}}>
        <Typography variant="h6" align="center">
          Please sign in to create a program!
        </Typography>
      </Paper>
    )
  }

  return (
    <div className="programs">
      <CreateProgram currentId={currentId} setCurrentId={setCurrentId}/>
      <ProgramList programs={programs} currentId={currentId} setCurrentId={setCurrentId}/>
    </div>
  )
}

export default Program;