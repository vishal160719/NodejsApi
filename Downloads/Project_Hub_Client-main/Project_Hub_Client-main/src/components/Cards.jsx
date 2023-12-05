import React from "react";
import { NavLink } from "react-router-dom";

const urlImage =
  "https://www.sitelink.com/images/internet-of-everything-smart-connected-1.jpg";

const Card = () => {
  return (
    <NavLink to="/categories">
      <div className="max-w-sm rounded cursor-pointer hover:-mt-2 overflow-hidden shadow-lg">
        <img src={urlImage} alt="Card" className="w-full h-40 object-cover" />
        <div className="px-6 py-4">
          <div className="mb-2">
            <button className="rounded-full text-xs mr-2 bg-primary text-white hover:bg-opacity-90 px-2 py-1">
              UserName
            </button>
            <button className="rounded-full text-xs mr-2 bg-primary text-white hover:bg-opacity-90 px-2 py-1">
              VII
            </button>
            <button className="rounded-full text-xs mr-2 bg-primary text-white hover:bg-opacity-90 px-2 py-1">
              Category
            </button>
          </div>
          <div className="font-semibold text-xl mb-2 text-black dark:text-white">
            Title
          </div>
          <p className="text-gray-700 text-base dark:text-gray-300">
            Description
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
