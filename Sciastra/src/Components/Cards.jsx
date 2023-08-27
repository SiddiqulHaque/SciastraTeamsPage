import React from "react";
import { inUni } from "../Data/Universities";
const Cards = ({ name, city }) => {
  return (
    <div className="max-w-md mx-4  rounded-md   overflow-hidden">
      <img
        className="rounded-md"
        src="https://images.pexels.com/photos/14276477/pexels-photo-14276477.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="Card"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-center text-purple-900">{name}</h2>
      </div>
    </div>
  );
};

export default Cards;
