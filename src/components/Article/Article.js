import React, { useEffect, useState } from 'react';

const Article = ({ id, setSelectedID, story }) => {

  const [ tags, setTags ] = useState([]);

  useEffect(() => {
    if (id && !story) {
      setSelectedID(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (story) {
      splitTags();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [story]);

  const splitTags = () => {
    const elements = [];

    story.topics.forEach(topic => {
      elements.push(<h4 className='topic'>{topic}</h4>);
    });

    story.locations.map(location => {
      elements.push(<h4 className='location'>{location}</h4>);
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