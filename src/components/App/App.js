import React from 'react';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import MainView from '../MainView/MainView';
import DetailsView from '../DetailsView/DetailsView';

function App() {
  return (
     <Router>
      <div className='app'>
        <header className='app-header'>
          <div></div>
          <div className='app-title-container'>
            <h1 className='app-title'>NYT READER</h1>
          </div>
          <NavLink to='/' className='home-btn-container'>
            <button>RETURN HOME</button>
          </NavLink>
        </header>
        <Route exact path='/'>
          <MainView />
        </Route>
        <Route exact path='/details'>
          <DetailsView />
        </Route>
      </div>
    </Router>
  );
}

export default App;
