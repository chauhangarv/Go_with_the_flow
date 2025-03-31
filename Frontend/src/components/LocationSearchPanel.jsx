import React from "react";

const LocationSearchPanel = (props) => {
  //sample array for location
  const locations = [
    "20 Cooper Square, New York, NY 10003, US",
    "20 Cooper Square, New York, NY 10003, US",
    "20 Cooper Square, New York, NY 10003, US",
  ];

  return (
    <div>
      {/* Dummy Data */}
      {locations.map(function (elem,idx) {
        return (
          <div key={idx}
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 border-2 border-gray-100 active:border-black rounded-xl p-3 items-center my-1 justify-start"
          >
            <h2 className="bg-[#eee] h-7 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-line"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
