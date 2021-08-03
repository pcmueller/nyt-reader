import React, { useEffect } from 'react';

const Article = ({ story }) => {

  useEffect(() => {
    if (story) {
      // console.log(story);
    }
  }, [story]);

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