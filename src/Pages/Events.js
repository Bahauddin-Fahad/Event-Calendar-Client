import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import Event from "./Event";

const Events = () => {
  const { date } = useParams();
  const [language, setLanguage] = useState("english");
  const events = useFetch(`day/${date}/${language}`);
  const languages = useFetch("languages");
  const eventNames = Object.keys(events);
  const languageSelect = (e) => {
    const language = e.target.value.toLowerCase();
    // console.log(language);
    setLanguage(language);
  };

  return (
    <div className="min-h-screen pb-8 glass bg-gray-700 hover:bg-gray-700 space-y-3">
      <div className="flex flex-col md:flex-row lg:flex-row gap-2 justify-around items-center pt-10 px-3">
        <h1 className="font-bold text-3xl text-white ">{date} </h1>
        <select onChange={languageSelect} className="select w-full max-w-xs">
          {languages?.map((language, index) => (
            <option className="font-semibold" key={index}>
              {language.name.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full px-10"
      >
        {eventNames.map((eventName, index) => (
          <Event key={index} eventName={eventName} events={events} />
        ))}
      </div>
    </div>
  );
};

export default Events;
