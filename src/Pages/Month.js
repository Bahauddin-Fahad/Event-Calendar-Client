import React from "react";
import { useNavigate } from "react-router-dom";

const Month = ({ month }) => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto bg-gray-300 p-3 rounded-xl w-full max-w-lg">
      <button
        onClick={() => navigate(`/month/${month.name}`)}
        className="btn w-full max-w-sm text-lg"
      >
        {month?.name}
      </button>
    </div>
  );
};

export default Month;
