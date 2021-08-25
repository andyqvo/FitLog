import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Program from './Program/Program';
import Exercise from './Exercise/Exercise';

const App = () => {

  const programId = useSelector(state => state.programId);
  const [currentId, setCurrentId] = useState(null);

  return (
    <Router>
      <Container>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Program currentId={currentId} setCurrentId={setCurrentId}/>
          </Route>
          <Route path="/program/:programId" component={Exercise}/>
        </Switch>
      </Container>
    </Router>
  )
}

export default App;