import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import { getPrograms } from '../../redux/actions/programs';
import CreateProgram from './CreateProgram';
import ProgramList from './ProgramList';

const Program = ({currentId, setCurrentId}) => {

  const dispatch = useDispatch();

  const userId = useSelector(state => state.userId);
  const programs = useSelector(state => state.programs);

  useEffect(() => {
    if (userId) {
      dispatch(getPrograms(userId));
    }
  }, []);

  return (
    <div className="programs">
      <CreateProgram currentId={currentId} setCurrentId={setCurrentId}/>
      <ProgramList programs={programs} currentId={currentId} setCurrentId={setCurrentId}/>
    </div>
  )
}

export default Program;