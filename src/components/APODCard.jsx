import React, { useState } from 'react';

function APODCard({
  date,
  copyright,
  explanation,
  url,
  hdurl,
  title,
  liked,
  post,
  media_type,
}) {
  const [isLiked, setIsLiked] = useState(post.liked);

  const handleLikeClick = (post) => {
    setIsLiked(!isLiked);

    if (post.liked) {
      post.liked = false;
    } else {
      post.liked = true;
    }
  };

  return (
    <div className='apod-card'>
      <h3>
        {title} -- <span>{date}</span>
      </h3>
      {media_type === 'video' ? (
        <iframe
          className='yt-embed'
          width='500'
          height='480'
          src={url}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
      ) : (
        <img src={hdurl ? hdurl : url} alt='' />
      )}

      <p>{explanation}</p>
      <button
        className={isLiked ? 'test' : null}
        onClick={() => {
          handleLikeClick(post);
        }}
      >
        Like
      </button>
      {copyright ? <small>&copy;{copyright}</small> : null}
    </div>
  );
}

export default APODCard;
