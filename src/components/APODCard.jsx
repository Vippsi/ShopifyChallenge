import React from 'react';

function APODCard({ date, copyright, explanation, hdurl, title }) {
  return (
    <div>
      <h3>
        {title} -- <span>{date}</span>
      </h3>
      <img src={hdurl} alt='' />
      <p>{explanation}</p>
      <button>Like</button>
      <small>&copy;{copyright}</small>
    </div>
  );
}

export default APODCard;
