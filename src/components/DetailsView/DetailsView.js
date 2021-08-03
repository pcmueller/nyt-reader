import React from 'react';
import Article from '../Article/Article';

const DetailsView = ({ id, setSelectedID, story }) => {
  return (
    <main className='details-page'>
      {!story && <p className='loading'>Loading...</p>}
      <Article id={id} setSelectedID={setSelectedID} story={story} />
    </main>
  )
}

export default DetailsView;