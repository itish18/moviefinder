import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = useCallback(async (url, setData) => {
    setIsLoading(true);
    setError(null);
    try {
      const controller = new AbortController();
      const signal = controller.signal;
      const { data } = await axios.get(url, { signal });
      setData(data);
      return () => controller.abort();
    } catch (e) {
      setError(e.response.data || "Something went wrong");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    getData,
  };
};

export default useFetch;
