import React, { useState, useEffect } from 'react';
import List from '../List/List';
import { fetchAllStories } from '../../utils/apiCalls';

const MainView = () => {

  const [ topStories, setTopStories ] = useState(null);

  const section = 'politics';

  useEffect(() => {
    if (!topStories) {
      getTopStories();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    for (let i = 0; i < 10; i++) {
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

  return (
    <main className='main-page'>
      <nav className='nav-bar'>search or filtering here</nav>
      <section className='stories-container'>
        {!topStories && <p className='loading'>Loading...</p>}
        {topStories && <List stories={topStories} />}
      </section>
    </main>
  )
}

export default MainView;