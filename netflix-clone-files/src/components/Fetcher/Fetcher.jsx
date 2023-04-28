import { useState, useEffect } from "react";

const Fetcher = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      const dataResponse = await fetch(url);
      const dataArr = await dataResponse.json();
      const movieData = dataArr.results;
      setData(movieData);
    }
    getData();
  }, [url]);

  return [data];
};

export default Fetcher;
