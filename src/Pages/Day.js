import React from "react";
import { useNavigate } from "react-router-dom";
const Day = ({ day }) => {
  const navigate = useNavigate();
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="m-auto hover:bg-gray-700 bg-gray-400 p-2 rounded-xl w-full max-w-sm"
    >
      <button
        onClick={() => navigate(`/day/${day}`)}
        className="btn hover:bg-gray-300 hover:text-black w-full max-w-sm"
      >
        {day}
      </button>
    </div>
  );
};

export default Day;
