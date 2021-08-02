import React from 'react';
import List from '../List/List';

const API_KEY = process.env.REACT_APP_NYT_API_KEY;

const MainView = () => {
  return (
    <main className='main-page'>
      <nav className='nav-bar'>search or filtering here</nav>
      <section className='list-container'>
        <List />
      </section>
    </main>
  )
}

export default MainView;