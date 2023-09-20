import React from "react";

export const FeatureProperties = () => {
  return (
    <div className="w-full flex mb-10 justify-between gap-5">
      <div className="flex-1 gap-3 flex flex-col">
        <img className="w-full h-auto lg:h-80 object-cover rounded-lg shadow-2xl" src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" />
		<div className="text-2xl font-bold">Aparthotel Stare Miasto</div>
        <div className="font-normal">Madrid</div>
        <div className="font-semibold">Starting from $120</div>
        <div className="fpRating">
          <button className="bg-indigo-700 text-white border border-none p-1  font-bold">8.9</button>
          <span className="text-sm mx-5">Excellent</span>
        </div>
      </div>
      <div className="flex-1 gap-3 flex flex-col">
        <img className="w-full h-auto lg:h-80 object-cover rounded-lg shadow-2xl" src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1" alt="" />
		<div className="text-2xl font-bold">Comfort Suites Airport</div>
        <div className="font-normal">Austin</div>
        <div className="font-semibold">Starting from $140</div>
        <div className="fpRating">
          <button className="bg-indigo-700 text-white border border-none p-1  font-bold">9.3</button>
          <span className="text-sm"> mx-5Exceptional</span>
        </div>
      </div>
      <div className="flex-1 gap-3 flex flex-col">
        <img className="w-full h-auto lg:h-80 object-cover rounded-lg shadow-2xl" src="https://i.ibb.co/jf1QPGP/fourseason-Hotel-jspg.jpg" alt="" />
		<div className="text-2xl font-bold">Four Seasons Hotel</div>
        <div className="font-normal">Lisbon</div>
        <div className="font-semibold">Starting from $99</div>
        <div className="fpRating">
          <button className="bg-indigo-700 text-white border border-none p-1  font-bold">8.8</button>
          <span className="text-sm mx-5">Excellent</span>
        </div>
      </div>
      <div className="flex-1 gap-3 flex flex-col">
        <img className="w-full h-auto lg:h-80 object-cover rounded-lg shadow-2xl" src="https://i.ibb.co/C7J5jF9/Hilton-Garden-Inn.jpg" alt="" />
		<div className="text-2xl font-bold">Hilton Garden Inn</div>
        <div className="font-normal">Berlin</div>
        <div className="font-semibold">Starting from $105</div>
        <div className="fpRating">
          <button className="bg-indigo-700 text-white border border-none p-1  font-bold">8.9</button>
          <span className="text-sm mx-5">Excellent</span>
        </div>
      </div>
    </div>
  );
};
