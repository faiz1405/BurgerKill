import React, { useState } from "react";
import { data } from "../components/data/data";

const Foods = () => {
  const [foods, setFoods] = useState(data);

  // filter type pizza/burger etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // filter price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640] mx-auto px-4 py-12">
      <h1 className="text-orange-600 text-4xl font-bold text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Rows */}
      <div className="flex flex-col md:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap gap-1">
            <button
              onClick={() => setFoods(data)}
              className="hover:-translate-y-1 duration-500 border-orange-600 shadow-md text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="hover:-translate-y-1 duration-500 border-orange-600 shadow-md text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="hover:-translate-y-1 duration-500 border-orange-600 shadow-md text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="hover:-translate-y-1 duration-500 border-orange-600 shadow-md text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="hover:-translate-y-1 duration-500 border-orange-600 shadow-md text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
          </div>
        </div>

        {/* Filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between gap-1 w-full max-w-[390px]">
            <button
              onClick={() => filterPrice("$")}
              className=" hover:-translate-y-1 duration-500 border-orange-600 shadow-md text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="hover:-translate-y-1 duration-500 border-orange-600 shadow-md text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="hover:-translate-y-1 duration-500 border-orange-600 shadow-md text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="hover:-translate-y-1 duration-500 border-orange-600 shadow-md text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-500"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 p-1 text-white rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
