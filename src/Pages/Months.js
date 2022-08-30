import axios from "axios";
import React, { useEffect, useState } from "react";
import Month from "./Month";

const Months = () => {
  const [months, setMonths] = useState([]);
  useEffect(() => {
    axios.get("months.json").then((data) => setMonths(data.data));
  }, []);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-center text-3xl font-bold mb-6 text-white">
        Event Calender 2023
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-gray-600 w-full max-w-6xl mx-auto p-4 rounded-2xl">
        {months.map((month) => (
          <Month key={month.id} month={month} />
        ))}
      </div>
    </div>
  );
};

export default Months;
