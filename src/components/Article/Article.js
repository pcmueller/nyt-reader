import React, { useEffect, useState } from 'react';

const Article = ({ id, setSelectedID, story }) => {

  const [ tags, setTags ] = useState([]);
  const [ dates, setDates ] = useState([]);

  useEffect(() => {
    if (id && !story) {
      setSelectedID(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (story) {
      formatDates();
      splitTags();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [story]);

  const formatDates = () => {
    // const [pubdate, ] = story.split('T');
    // console.log(pubdate);
  };

  const splitTags = () => {
    const elements = [];

    story.topics.forEach(elem => {
      const index = story.topics.indexOf(elem) + 100;
      elements.push(<span className='topic' key={index}>{elem}</span>);
    });

    story.locations.map(elem => {
      const index = story.locations.indexOf(elem) + 200;
      elements.push(<span className='location' key={index}>{elem}</span>);
    });

    setTags(elements);
  };

  if (!story) {
    return <p className='loading'>Loading...</p>;
  } else {
    return (
      <article className='article-container'>
        <a className='article-title' href={story.url} alt='article link'>
          <span>{story.title}</span>
        </a>
        <section className='article-details'>
          <div className='nyt-sections'>
            <span className='nyt-section'>{story.section}</span>
            <span className='nyt-subsection'>{story.subsection}</span>
          </div>
          <span className='byline'>{story.byline}</span>
          <div className='date-section'>
            <span className='pub-date'>Published: {story.published_date}</span>
            <span className='updated'>Updated: {story.updated_date}</span>
          </div>
        </section>
        <p className='article-abstract'>{story.abstract}</p>
        <div className='tags-section'>
          <p className='tags'>{tags}</p>
        </div>
      </article>
    )
  }
}

export default Article;