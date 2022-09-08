import React from "react";
import { useParams } from "react-router-dom";

import useFetch from "../Hooks/useFetch";
import Month from "./Month";

const Months = () => {
  const { year } = useParams();
  const months = useFetch(`${year}/months`);
  console.log(months);
  // months.sort((a, b) => a._id - b._id);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center glass bg-gray-600 hover:bg-gray-600">
      <h2 className="text-center text-3xl font-bold mb-6 text-white">
        Event Calender {year}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  w-full max-w-6xl mx-auto p-4 rounded-2xl">
        {months.map((month) => (
          <Month key={month?._id} month={month} year={year} />
        ))}
      </div>
    </div>
  );
};

export default Months;
