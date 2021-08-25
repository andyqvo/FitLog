import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import { getProgramsByUser, getPrograms } from '../../redux/actions/programs';
import CreateProgram from './CreateProgram';
import ProgramList from './ProgramList';

const Program = ({currentId, setCurrentId}) => {

  const dispatch = useDispatch();

  const programs = useSelector(state => state.programs);

  useEffect(() => {
    dispatch(getPrograms());
  }, []);

  return (
    <div className="programs">
      <CreateProgram currentId={currentId} setCurrentId={setCurrentId}/>
      <ProgramList programs={programs} currentId={currentId} setCurrentId={setCurrentId}/>
    </div>
  )
}

export default Program;