import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.waitingForDriver(false);
        }}
        className="p-3 w-[93%] text-center absolute top-0 "
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <div className="flex items-center justify-between">
        <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Tejas</h2>
          <h4 className="text-xl font-semibold -mt-1   -mb-1 ">KA18 AZ 0987</h4>
          <p className="text-sm text-gray-600">BMW </p>
        </div>
      </div>

      <div className="flex gap-2 justify-between items-center flex-col">
        <div className="w-full mt-5">
          <div className="flex item-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-fill"></i>
            <div className=" ">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex item-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill "></i>
            <div className=" ">
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex item-center gap-5 p-3 ">
            <i className="text-lg ri-currency-line"></i>
            <div className=" ">
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
