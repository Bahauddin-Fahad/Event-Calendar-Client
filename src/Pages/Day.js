import React from "react";
import { useNavigate } from "react-router-dom";

const Day = ({ day, monthName }) => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto bg-gray-300 p-2 rounded-xl w-full max-w-lg">
      <button
        onClick={() => navigate(`/${monthName}/${day._id}`)}
        className="btn"
      >
        {day.date}
      </button>
    </div>
  );
};

export default Day;
