import { useEffect, useState } from 'react'
import { NASA_API_KEY } from './env.json';


function AstroDay({ date }) {
  let [data, setData] = useState(null);
  let [isLoading, setLoading] = useState(false);

  // fetch the latest picture of the day
  useEffect(() => {
    setLoading(true);

    const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${NASA_API_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [date]);

  if(isLoading) {
    return <div>Loading...</div>
  }
  if(!data) {
    return <div>No data</div>
  }

  return (
    <div>
      <h2>{data.date} {data?.title}</h2>
      <img src={data.url} />
      <p>{data.explanation}</p>
    </div>
  )
}

export default AstroDay
