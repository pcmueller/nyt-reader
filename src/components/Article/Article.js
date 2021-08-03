import React, { useEffect } from 'react';

const Article = ({ id, setSelectedID, story }) => {

  useEffect(() => {
    if (id && !story) {
      setSelectedID(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!story) {
    return <p className='loading'>Loading...</p>;
  } else {
    return (
      <section className='article-container'>
        <h2 className='article-title'>{story.title}</h2>
        <article className='article-details'>
          <span>{story.published_date}</span>
          <p className='article-abstract'>{story.abstract}</p>
        </article>
      </section>
    )
  }
}

export default Article;