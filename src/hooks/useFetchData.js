import { useState, useCallback } from "react";

const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const sendRequest = useCallback(async (config, dataProcess) => {
    try {
      setError("");
      setIsLoading(true);
      const response = await fetch(config.url, {
        method: config.method ? config.method : "GET",
        headers: config.headers ? config.headers : {},
        body: config.body ? config.body : null,
      });
      if (!response.ok) {
        throw new Error(
          `Request failed with status code: ${response.status}, error text: ${response.statusText} !`
        );
      }
      const result = await response.json();
      dataProcess(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [error, isLoading, sendRequest];
};

export default useFetchData;
