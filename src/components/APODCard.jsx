import React from 'react';

function APODCard({
  date,
  copyright,
  explanation,
  url,
  hdurl,
  title,
  post,
  media_type,
  handleLikeClick,
  index,
}) {


  return (
    <div className='apod-card'>
      <h3>
        {title} <br />
        <span>{date}</span>
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
        className={post.liked ? 'liked' : 'button'}
        onClick={() => {
          handleLikeClick(post, index);
        }}
      >
        Like
      </button>
      {copyright ? <small>&copy;{copyright}</small> : null}
    </div>
  );
}

export default APODCard;
