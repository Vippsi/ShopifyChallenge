import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import APODCard from './APODCard';

function APOD() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState([]);
  const savedLocalData = useRef();

  /**
   * @Description Gets a new date and formats into YYYY-MM-DD
   * @return {string} a string with date formatted YYYY-MM-DD
   */

  const getDate = () => {
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}-${month < 10 ? `0${month}` : `${month}`}-${day}`;
  };

  const [startDate, setStartDate] = useState(getDate());

  /**
   * @Description Fetches Data from API and sets it to state
   * @return {Array} An array of APOD posts
   */
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.nasa.gov/planetary/apod?start_date=' +
          startDate +
          '&api_key=' +
          API_KEY
      );
      setData(result.data);
    };
    fetchData();
  }, [startDate, API_KEY]);

  /**
   * @Description Verifies localStorage is not empty, and sets empty arr if true
   * @return {Array} An array of dates that are currently saved to localStorage
   */
  useEffect(() => {
    if (localStorage.getItem('LikedPosts') == null) {
      localStorage.setItem('LikedPosts', '[]');
    }
    return (savedLocalData.current = JSON.parse(
      localStorage.getItem('LikedPosts')
    ));
  }, []);

  /**
   * @Description Handles liking, unliking, and adding post dates to localStorage.
   * @param {Object} post the current object we're working with
   * @param {Number} index the index of the current post
   */
  const handleLikeClick = (post, index) => {
    let postToUpdate = data[index];

    postToUpdate['liked'] = !postToUpdate['liked'];

    setData([...data.slice(0, index), postToUpdate, ...data.slice(index + 1)]);

    if (localStorage.getItem('LikedPosts') == null) {
      localStorage.setItem('LikedPosts', '[]');
    } else {
      let old_data = JSON.parse(localStorage.getItem('LikedPosts'));

      if (post.liked === false) {
        let newArr = old_data.filter((item) => item !== post.date);
        localStorage.setItem('LikedPosts', JSON.stringify(newArr));
      } else {
        old_data.push(post.date);
        localStorage.setItem('LikedPosts', JSON.stringify(old_data));
      }
    }
  };

  return (
    <div className='apod-container'>
      <h2>APOD From NASA</h2>
      <div className='datepicker'>
        <input
          type='date'
          value={startDate}
          max={getDate()}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className='apod-card-container'>
        {data.map((post, index) => {
          return (
            <APODCard
              index={index}
              handleLikeClick={handleLikeClick}
              post={post}
              key={index}
              title={post.title}
              hdurl={post.hdurl}
              url={post.url}
              explanation={post.explanation}
              copyright={post.copyright}
              date={post.date}
              media_type={post.media_type}
            />
          );
        })}
      </div>
    </div>
  );
}

export default APOD;
