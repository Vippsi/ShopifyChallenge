import React, { useState, useEffect } from 'react';
import axios from 'axios';
import APODCard from './APODCard';
import ReactDatePicker from 'react-datepicker';

function APOD() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  console.log(data);

  const getDate = () => {
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}-${month < 10 ? `0${month}` : `${month}`}-${day - 7}`;
  };

  let weekOldformatedDate = getDate();

  //start_date=' +
  //weekOldformatedDate + 
  //

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.nasa.gov/planetary/apod?count=' + 30 +
          '&api_key=' +
          API_KEY
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className='apod-container'>
      <ReactDatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
        }}
      />
      <div className='apod-card-container'>
        {data.map(
          (post) => (
            (post.liked = false),
            (
              //   console.log(post.title)
              <APODCard
                post={post}
                key={post.date}
                title={post.title}
                hdurl={post.hdurl}
                url={post.url}
                explanation={post.explanation}
                copyright={post.copyright}
                date={post.date}
                liked={post.liked}
                media_type={post.media_type}
              />
            )
          )
        )}
      </div>
    </div>
  );
}

export default APOD;
