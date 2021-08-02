import React, { useEffect, useState } from 'react';

const List = ({ stories }) => {

  const [ storyCards, setStoryCards ] = useState([]);

  useEffect(() => {
    if (stories) {
      buildStoryCards();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buildStoryCards = () => {
    const cards = stories.map(story => {
      return (
        <article className='story-box' key={story.id}>
          <div className='story-title'>
            <span>{story.title}</span>
          </div>
          <div className='story-abstract'>
            <p>{story.abstract}</p>
          </div>
        </article>
      )
    });
    console.log(cards);
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