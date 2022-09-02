import React from "react";
import { useParams } from "react-router-dom";
import Day from "./Day";
import useFetch from "../Hooks/useFetch";
const Days = () => {
  const { monthName } = useParams();
  const month = useFetch(monthName);
  const days = month.dates;

  return (
    <div className="h-screen flex justify-center items-center flex-col px-8">
      <h1 className="text-3xl font-bold text-white uppercase pb-4">
        {month?.name}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5">
        {days?.map((day, index) => (
          <Day key={index} day={day} />
        ))}
      </div>
    </div>
  );
};

export default Days;
