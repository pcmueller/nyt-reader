import React, { useEffect, useState } from 'react';
import months from '../../assets/months';
const Article = ({ id, setSelectedID, story }) => {

  const [ tags, setTags ] = useState([]);
  const [ published, setPublished ] = useState([]);
  const [ updated, setUpdated ] = useState([]);

  useEffect(() => {
    if (id && !story) {
      setSelectedID(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (story) {
      formatDates(setPublished, story.published_date);
      formatDates(setUpdated, story.updated_date);
      splitTags();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [story]);

  const formatDates = (setDate, fullDate) => {
    const [date, ] = fullDate.split('T');
    const [ y, m, d ] = date.split('-');
    const [ , monthNum] = m.split('0');
    const [ , dayNum] = d.split('0');
    const formatted = `${months[monthNum]} ${dayNum}, ${y}`;

    setDate(formatted);
  };

  const splitTags = () => {
    const elements = [];

    story.topics.forEach(elem => {
      const index = story.topics.indexOf(elem) + 100;
      elements.push(<span className='topic' key={index}>{elem}</span>);
    });

    story.locations.forEach(elem => {
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
        <a className='article-headline' href={story.url} alt='article link'>
          <span>{story.title}</span>
        </a>
        {story.image && 
        <div className='pic-container'>
          <img className='article-pic' src={story.image} alt='article'></img>
        </div>
        }
        <section className='article-details'>
          <div className='nyt-sections'>
            <span className='nyt-section'>{story.section}</span>
            <span className='nyt-subsection'>{story.subsection}</span>
          </div>
          <span className='byline'>{story.byline}</span>
          <div className='date-section'>
            <div className='date-box'>
              <span>Published: </span>
              <span className='pub-date'>{published}</span>
            </div>
            <div className='date-box'>
              <span>Updated: </span>
              <span className='updated'>{updated}</span>
            </div>
          </div>
          <p className='article-abstract'>{story.abstract}</p>
          <div className='tags-section'>
            <p className='tags'>{tags}</p>
          </div>
        </section>
      </article>
    )
  }
}

export default Article;