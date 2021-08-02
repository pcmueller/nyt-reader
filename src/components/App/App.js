import React from 'react';
import MainView from '../MainView/MainView';
import DetailsView from '../DetailsView/DetailsView';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <div></div>
        <div className='app-title-container'>
          <h1 className='app-title'>NYT READER</h1>
        </div>
        <nav className='home-btn-container'>
          <button>RETURN HOME</button>
        </nav>
      </header>
      {/* <MainView /> */}
      <DetailsView />
    </div>
  );
}

export default App;
