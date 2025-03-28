import { useState, useEffect } from "react";
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [getdata, setData] = useState([]);
  const [getGroup, setGroup] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, 1000);
  }, [url]);

  return { getdata, loading };
};
