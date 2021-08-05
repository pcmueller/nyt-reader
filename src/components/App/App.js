import React, { useState, useEffect } from 'react';
import { Route, NavLink, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { fetchAllStories } from '../../utils/apiCalls';
import MainView from '../MainView/MainView';
import DetailsView from '../DetailsView/DetailsView';

const App = () => {

  const [ section, setSection ] = useState('home');
  const [ topStories, setTopStories ] = useState(null);
  const [ selectedID, setSelectedID ] = useState(-1);
  const [ selectedStory, setSelectedStory ] = useState(null);
  const [ error, setError ] = useState('');

  useEffect(() => {
    if (!topStories) {
      getTopStories();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTopStories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);

  
  useEffect(() => {
    if (selectedID >= 0) {
      setSelectedStory(topStories[selectedID]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedID]);
  
  const getTopStories = () => {
    fetchAllStories(section)
      .then(data => {
        if (data.results) {
          filterStories(data.results);
        }
      })
      .catch(error => {
        setError('Sorry, we\'re unable to load the page at the moment.');
        console.log(error);
    })
  }

  const filterStories = (results) => {
    const stories = [];
    for (let i = 0; i < 12; i++) {
        const story = {
          id: i,
          title: results[i]?.title,
          abstract: results[i]?.abstract,
          published_date: results[i]?.published_date,
          updated_date: results[i]?.updated_date,
          url: results[i]?.url,
          byline: results[i]?.byline,
          locations: results[i]?.geo_facet,
          topics: results[i]?.des_facet,
          section: results[i]?.section,
          subsection: results[i]?.subsection,
          image: results[i]?.multimedia?.[0]?.url
        }
        if (story.title) {
          stories.push(story);
        }
    }

    if (stories) {
      setTopStories(stories);
    }
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
            <NavLink to='/' className='home-link'>
              <h1 className='app-title'>NYT READER</h1>
            </NavLink>
          </div>
        </header>
        <Route exact path='/'>
          <MainView
            section={section}
            setSection={setSection}
            topStories={topStories}
            setTopStories={setTopStories}
            setSelectedID={setSelectedID}
            error={error}
          />
        </Route>
        <Route exact path='/article/:id' render={ ({ match }) => displaySelected(match) }></Route>
      </div>
    </Router>
  );
}

export default App;
