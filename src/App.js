import React, {Fragment} from 'react';
import AppMovie from './containers/task1/AppMovie'
import AppJokes from './containers/task2/AppJokes'
import './App.css';

function App() {
  return (
      <Fragment>
        <AppMovie/>
        <AppJokes/>
      </Fragment>
  );
}

export default App;
