import React from "react";
import { useNavigate } from "react-router-dom";

const Month = ({ month }) => {
  const navigate = useNavigate();

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="mx-auto hover:bg-gray-700 bg-gray-400 p-2 rounded-xl w-full max-w-lg"
    >
      <button
        onClick={() => navigate(`${month?.name}`)}
        className="btn hover:bg-gray-300 hover:text-black w-full max-w-sm"
      >
        {month.name}
      </button>
    </div>
  );
};

export default Month;
