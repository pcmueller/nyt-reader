import React, { useState, useEffect } from 'react';
import { Route, NavLink, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { fetchAllStories } from '../../utils/apiCalls';
import MainView from '../MainView/MainView';
import DetailsView from '../DetailsView/DetailsView';

const App = () => {

  const [ topStories, setTopStories ] = useState(null);
  const [ selectedID, setSelectedID ] = useState(-1);
  const [ selectedStory, setSelectedStory ] = useState(null);

  const section = 'politics';

  useEffect(() => {
    if (!topStories) {
      getTopStories();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  useEffect(() => {
    if (selectedID >= 0) {
      setSelectedStory(topStories[selectedID]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedID]);
  
  const getTopStories = () => {
    fetchAllStories(section)
      .then(data => {
        filterStories(data.results);
      })
      .catch(error => {
        console.log(error);
    })
  }

  const filterStories = (results) => {
    const stories = [];
    for (let i = 0; i < 12; i++) {
      const story = {
        id: i,
        title: results[i].title,
        abstract: results[i].abstract,
        published_date: results[i].published_date,
        image: results[i].multimedia[1].url
      }
      stories.push(story);
    }
    setTopStories(stories);
  }

  const displaySelected = (match) => {
    if (match.params.id < 12 && topStories) {
      return (
        <DetailsView 
          id={match.params.id} 
          setSelectedID={setSelectedID} 
          story={selectedStory} 
        />
      );
    } else if (match.params.id >= 12 ) {
      return <Redirect to='/'/>;
    }
  }

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
        <Route exact path='/article/:id' render={ ({ match }) => displaySelected(match) }></Route>
      </div>
    </Router>
  );
}

export default App;
