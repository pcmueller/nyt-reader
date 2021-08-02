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
        <div className='story-box' key={story.id}>
          <span className='story-title'>{story.title}</span>
          <p className='story-abstract'>{story.abstract}</p>
        </div>
      )
    });
    console.log(cards);
    if (cards.length === stories.length) {
      setStoryCards(cards);
    }
  }

  return (
    <section className='stories-list'>
      {!storyCards && <p className='loading'>Loading...</p>}
      {storyCards}
    </section>
  )
}

export default List;