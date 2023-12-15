import { useState, useEffect, useCallback } from "react";

const useFetch = (url, initial) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(initial)

  const getData = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
		setData(data)
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);
  return { loading, data };
};

export default useFetch
