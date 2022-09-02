import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import Event from "./Event";

const Events = () => {
  const { date } = useParams();
  const events = useFetch(`day/${date}`);
  const eventNames = Object.keys(events);
  return (
    <div>
      <h1 className="font-bold text-3xl text-white pb-2">{date} </h1>
      {eventNames.map((eventName) => (
        <Event eventName={eventName} events={events} />
      ))}
    </div>
  );
};

export default Events;
