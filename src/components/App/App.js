import React, { useState, useEffect } from 'react';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import MainView from '../MainView/MainView';
import DetailsView from '../DetailsView/DetailsView';

const App = () => {

  const [ topStories, setTopStories ] = useState(null);
  const [ selectedID, setSelectedID ] = useState(-1);
  const [ selectedStory, setSelectedStory ] = useState(null);

  useEffect(() => {
    if (selectedID >= 0) {
      setSelectedStory(topStories[selectedID]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedID]);

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
          <MainView 
            topStories={topStories}
            setTopStories={setTopStories}
            setSelectedID={setSelectedID}
          />
        </Route>
        <Route exact path='/article/:id'>
          {!selectedStory && <p className='loading'>Loading...</p>}
          <DetailsView story={selectedStory} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
