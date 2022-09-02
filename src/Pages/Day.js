import React from "react";
import { useNavigate } from "react-router-dom";
const Day = ({ day }) => {
  // console.log(day);
  // const joined = day.split(" ").join("_");
  // console.log(joined);
  const navigate = useNavigate();
  return (
    <div className="m-auto bg-gray-300 p-2 rounded-xl w-full max-w-xl">
      <button onClick={() => navigate(`/day/${day}`)} className="btn">
        {day}
      </button>
    </div>
  );
};

export default Day;
