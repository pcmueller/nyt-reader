import React, { useEffect, useState } from 'react';
import List from '../List/List';
import nytSections from '../../assets/nytSections';

const MainView = ({ section, setSection, topStories, setSelectedID, error }) => {

  const [ options, setOptions ] = useState([]);

  useEffect(() => {
    const elements = nytSections.map(elem => {
    return (
      <option 
        className='section-option' 
        label={elem[1]}
        key={elem[0]}
        value={elem[0]}>
      </option>)
    });
    if (elements.length === nytSections.length) {
      setOptions(elements);
    }
  }, []);

  const handleSelect = (e) => {
    const selection = e.target.value;
    setSection(selection);
  }

  return (
    <main className='main-page'>
      <nav className='nav-bar'>
      <label htmlFor='dropdown'>FILTER ARTICLES</label>
      <div className='select'>
        <select
          id='dropdown'
          className='dropdown'
          defaultValue='0'
          onChange={handleSelect}>
            <option value='0' disabled >Select section...</option>
            {options}
        </select>
        <span className='focus'></span>
      </div>
      </nav>
      <section className='stories-container'>
        {error.length > 0 && <p className='loading'>{error}</p>}
        {!topStories && !error && <p className='loading'>Loading...</p>}
        {topStories && <List section={section} stories={topStories} setSelectedID={setSelectedID} />}
      </section>
    </main>
  )
}

export default MainView;