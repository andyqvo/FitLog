import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';

import { deleteProgram } from '../../redux/actions/programs';

const ProgramList = ({setCurrentId, currentId, programs}) => {

  const user = JSON.parse(localStorage.getItem('profile'));

  const dispatch = useDispatch();

  const programList = programs.map(program => {
    let disable = (user?.result?.googleId !== program?.creator && user?.result?._id !== program?.creator);
    return (
      <TableRow key={program._id}>
        <TableCell component="th" scope="row">
          <Link href={`/program/${program._id}`}>{program.name}</Link>
        </TableCell>
        <TableCell align="right">{program.numOfWeeks}</TableCell>
        <TableCell align="right">{program.creatorName}</TableCell>
        <TableCell align="right">{program.created}</TableCell>
        <TableCell align="right">
          <Button color="primary" onClick={() => {setCurrentId(program._id)}} disabled={disable}>Edit</Button>
          <Button color="secondary" onClick={() => {dispatch(deleteProgram(program._id))}} disabled={disable}>Delete</Button>
        </TableCell>
      </TableRow>
    )
  });

  return (
    <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Program Name</TableCell>
          <TableCell align="right">Number of Weeks</TableCell>
          <TableCell align="right">Author</TableCell>
          <TableCell align="right">Created</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {programList}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default ProgramList;