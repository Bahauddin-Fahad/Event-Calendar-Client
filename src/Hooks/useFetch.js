import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (param) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/${param}`)
      .then((data) => setData(data.data));
  }, [param]);

  return data;
};

export default useFetch;
