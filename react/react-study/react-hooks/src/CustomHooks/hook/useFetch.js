import { useEffect, useState } from "react";

export function useFetch(baseUrl, initialRoute) {
  const [data, setData] = useState(null);

  const fetchUrl = (route) => {
    fetch(baseUrl + "/" + route)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    fetchUrl(initialRoute);
  }, []);

  return { data, fetchUrl };
}
