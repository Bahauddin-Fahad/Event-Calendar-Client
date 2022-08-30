import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import Day from "./Day";
const Days = () => {
  const { monthName } = useParams();
  const days = useFetch(monthName);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="py-4 font-bold text-3xl text-white uppercase">
        {monthName} 2023
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5 bg-gray-600 w-full max-w-7xl mx-auto p-4 rounded-2xl items-center">
        {days.map((day) => (
          <Day key={day._id} day={day} monthName={monthName} />
        ))}
      </div>
    </div>
  );
};

export default Days;
