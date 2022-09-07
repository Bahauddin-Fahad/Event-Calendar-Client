import React, { Fragment } from "react";

const Event = ({ eventName, events }) => {
  const eventValues = events[eventName];
  return (
    <div className="bg-gray-300 rounded-xl p-3 mx-auto flex flex-wrap items-center gap-x-2 w-full">
      <h1 className="font-bold uppercase text-left text-lg">{eventName}:</h1>
      {typeof eventValues === "string" ? (
        <>
          <h1 className="font-semibold">{eventValues}</h1>
        </>
      ) : (
        <>
          {eventValues?.map((eventValue, index) => {
            return typeof eventValue === "string" ? (
              eventValue === "NA" ? (
                <h1 key={index} className="text-sm font-semibold text-red-600">
                  N/A
                </h1>
              ) : (
                <h1 key={index} className="font-semibold">
                  {eventValue}
                </h1>
              )
            ) : (
              <Fragment key={index}>
                {Object.keys(eventValue).map((key, index) => {
                  return (
                    <Fragment key={index}>
                      {key !== "upto" && key !== "values" && (
                        <h1 className="font-bold">{key} :</h1>
                      )}
                      {typeof eventValue[key] === "string" ? (
                        <h1 className="font-bold w-full text-left mt-1">
                          {eventValue[key]} :
                        </h1>
                      ) : eventValue[key].length === 1 ? (
                        <h1 className="text-sm font-semibold text-red-600">
                          N/A
                        </h1>
                      ) : (
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {eventValue[key].map((singleValue, index) => (
                            <h1
                              key={index}
                              className="font-semibold text-sm text-left"
                            >
                              {singleValue}
                            </h1>
                          ))}
                        </div>
                      )}
                    </Fragment>
                  );
                })}
              </Fragment>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Event;
