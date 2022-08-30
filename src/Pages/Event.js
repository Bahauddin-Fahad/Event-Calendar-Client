import React from "react";

const Event = ({ eventName, events }) => {
  const eventValue = events[eventName];

  return (
    <div className="mx-auto bg-gray-300 p-2 m-2 rounded-xl flex flex-wrap items-center gap-x-4 gap-y-1">
      <h1 className="font-bold uppercase text-left text-lg">{eventName}:</h1>
      {typeof eventValue === "string" ? (
        <>
          <h1 className="font-bold">{eventValue}</h1>
        </>
      ) : (
        <>
          {eventValue.map((singleValue) => {
            return typeof singleValue === "string" ? (
              singleValue === "NA" ? (
                <h1 className=" font-semibold text-red-600">N/A</h1>
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
                        <h1 className="font-bold w-full text-left">
                          {singleValue[key]} :
                        </h1>
                      ) : (
                        singleValue[key].map((value1) =>
                          value1 === "NA" ? (
                            <h1 className="text-sm font-semibold text-red-600">
                              N/A
                            </h1>
                          ) : (
                            <h1 className="font-semibold text-sm">{value1}</h1>
                          )
                        )
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
