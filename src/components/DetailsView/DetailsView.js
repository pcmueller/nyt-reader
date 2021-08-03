import React from 'react';
import Article from '../Article/Article';

const DetailsView = ({ story }) => {
  return (
    <main className='details-page'>
      {!story && <p className='loading'>Loading...</p>}
      <Article story={story} />
    </main>
  )
}

export default DetailsView;