import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Json = () => {
  const [json, setJson] = useState([]);
  // const [dates, setDates] = useState([]);
  const dates = [];
  useEffect(() => {
    axios.get("Json.json").then((data) => setJson(data.data));
  }, []);
  console.log(json);

  return <div></div>;
};

export default Json;
