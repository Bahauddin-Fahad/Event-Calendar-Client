import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const useFetch = (param) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/${param}`)
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        // navigate("/notFound");
        toast.error("Failed to Load Data", { theme: "colored" });
      });
  }, [param, navigate]);

  return data;
};

export default useFetch;
