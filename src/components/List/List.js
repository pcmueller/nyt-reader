import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import nytSections from '../../assets/nytSections';

const List = ({ section, stories, setSelectedID }) => {

  const [ storyCards, setStoryCards ] = useState([]);
  const [ sectionTitle, setSectionTitle ] = useState('');
  
  useEffect(() => {
    setStoryCards([]);
    findSectionTitle();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);

  useEffect(() => {
    if (stories) {
      buildStoryCards();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stories]);

  const findSectionTitle = () => {
    nytSections.forEach(elem => {
      if (elem[0] === section) {
        setSectionTitle(elem[1]);
      }
    });
  }

  const handleClick = (e) => {
    setSelectedID(parseInt(e.target.id));
  }

  const buildStoryCards = () => {
    const cards = stories.map(story => {
      return (
        <article className='story-box' key={story.id} >
          <NavLink to={`/article/${story.id}`} className='article-link'>
              <span id={story.id} onClick={(e)=>handleClick(e)}>{story.title}</span>
          </NavLink>
          <div className='story-abstract'>
            <p>{story.abstract}</p>
          </div>
        </article>
      )
    });
    
    if (cards.length === stories.length) {
      setStoryCards(cards);
    }
  }

  if (storyCards.length === 0) {
    return (
      <section className='top-stories-list'>
        <div className='message-box'>
          <p className='loading'>Loading...</p>
        </div>
      </section>
    )
  }

  return (
    <section className='top-stories-list'>
      <div className='list-heading'>
        {section === 'home' && <h2>Top Stories</h2>}
        {section !=='home' && <h2>Top Stories in {sectionTitle}</h2>}
      </div>
      {storyCards}
    </section>
  )
}

export default List;