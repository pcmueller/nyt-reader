import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const List = ({ stories, setSelectedID }) => {

  const [ storyCards, setStoryCards ] = useState([]);

  useEffect(() => {
    if (stories) {
      buildStoryCards();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <section className='top-stories-list'>
      <div className='top-stories-title'>
        <h2>Top Stories in Politics</h2>
      </div>
      {!storyCards && <p className='loading'>Loading...</p>}
      {storyCards}
    </section>
  )
}

export default List;