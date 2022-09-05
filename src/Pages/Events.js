import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import Event from "./Event";

const Events = () => {
  const { date } = useParams();
  const events = useFetch(`day/${date}`);
  const eventNames = Object.keys(events);
  return (
    <div className="min-h-screen pb-8 glass bg-gray-700 hover:bg-gray-700">
      <h1 className="font-bold text-3xl text-white p-2">{date} </h1>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full px-10"
      >
        {eventNames.map((eventName) => (
          <Event eventName={eventName} events={events} />
        ))}
      </div>
    </div>
  );
};

export default Events;
