import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

import Event from "./Event";

const Events = () => {
  const { monthName, dayId } = useParams();
  const events = useFetch(`${monthName}/${dayId}`);
  const eventNames = Object.keys(events);
  const eventValues = Object.values(events);
  return (
    <div className="pb-10">
      <h1 className="py-4 font-bold text-3xl text-gray-200 uppercase">
        {eventValues[0]}
      </h1>
      <div className="mx-10">
        {eventNames.map((eventName, index) => (
          <Event key={index} eventName={eventName} events={events} />
        ))}
      </div>
    </div>
  );
};

export default Events;
