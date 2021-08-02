import React from 'react';
import List from '../List/List';

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