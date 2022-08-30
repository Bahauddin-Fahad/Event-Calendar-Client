import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (param) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/${param}`)
      .then((data) => setData(data.data));
  }, [param]);

  return data;
};

export default useFetch;
