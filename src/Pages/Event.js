import React from "react";

const Event = ({ eventName, events }) => {
  const eventValue = events[eventName];
  return (
    <div className="mx-auto bg-gray-300 p-3 m-2 rounded-xl flex flex-wrap items-center gap-x-3">
      <h1 className="font-bold uppercase text-left text-lg">{eventName}:</h1>
      {typeof eventValue === "string" ? (
        <>
          <h1 className="font-semibold">{eventValue}</h1>
        </>
      ) : (
        <>
          {eventValue.map((singleValue) => {
            return typeof singleValue === "string" ? (
              singleValue === "NA" ? (
                <h1 className="text-sm font-semibold text-red-600">N/A</h1>
              ) : (
                <h1 className="font-semibold">{singleValue}</h1>
              )
            ) : (
              <>
                {Object.keys(singleValue).map((key) => {
                  return (
                    <>
                      {key !== "upto" && key !== "values" && (
                        <h1 className="font-bold">{key} :</h1>
                      )}
                      {typeof singleValue[key] === "string" ? (
                        <h1 className="font-bold w-full text-left mt-1">
                          {singleValue[key]} :
                        </h1>
                      ) : (
                        <div className="grid grid-cols-3 gap-x-3 gap-y-1">
                          {singleValue[key].map((value) =>
                            value === "NA" ? (
                              <h1 className="text-sm font-semibold text-red-600">
                                N/A
                              </h1>
                            ) : (
                              <h1 className="font-semibold text-sm text-left">
                                {value}
                              </h1>
                            )
                          )}
                        </div>
                      )}
                    </>
                  );
                })}
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Event;
