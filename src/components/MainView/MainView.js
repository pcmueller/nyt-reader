import React from 'react';
import List from '../List/List';

const MainView = ({ topStories, setSelectedID }) => {

  return (
    <main className='main-page'>
      <nav className='nav-bar'>search or filtering here</nav>
      <section className='stories-container'>
        {!topStories && <p className='loading'>Loading...</p>}
        {topStories && <List stories={topStories} setSelectedID={setSelectedID} />}
      </section>
    </main>
  )
}

export default MainView;