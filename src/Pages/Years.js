import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const Years = () => {
  const navigate = useNavigate();
  const years = useFetch("years");
  const [year, setYear] = useState("Select The Year");
  const getYear = (e) => {
    const searchButton = document.getElementById("search-button");
    const year = e.target.value;
    if (year !== "Select The Year") {
      // console.log(year);
      setYear(year);
      searchButton.removeAttribute("disabled");
    } else {
      searchButton.setAttribute("disabled", true);
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center glass bg-gray-600 hover:bg-gray-600 space-y-5">
      <h2 className="text-center text-3xl font-bold text-white">
        Welcome to Event Calender
      </h2>
      <div>
        <select onChange={getYear} className="select w-full max-w-sm">
          <option>Select The Year</option>
          {years
            ?.sort((a, b) => a.year - b.year)
            //  if (a.year > b.year) {
            //     return 1;
            //   } else {
            //     return -1;
            //   }
            .map((year, index) => (
              <option key={index}>{year.year}</option>
            ))}
        </select>
      </div>
      <button
        onClick={() => navigate(`${year}/months`)}
        id="search-button"
        className="btn w-full max-w-xs"
      >
        Search
      </button>
    </div>
  );
};

export default Years;
