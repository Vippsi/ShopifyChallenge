import React, { useState, useEffect } from 'react';
import axios from 'axios';
import APODCard from './APODCard';

function APOD() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState([]);
  console.log(data);

  const getDate = () => {
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}-${month < 10 ? `0${month}` : `${month}`}-${day - 7}`;
  };

  let weekOldformatedDate = getDate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.nasa.gov/planetary/apod?start_date=' +
          weekOldformatedDate +
          '&api_key=' +
          API_KEY
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((post) => (
        //   console.log(post.title)
        <APODCard
          key={post.date}
          title={post.title}
          hdurl={post.hdurl}
          explanation={post.explanation}
          copyright={post.copyright}
          date={post.date}
        />
      ))}
    </div>
  );
}

export default APOD;
