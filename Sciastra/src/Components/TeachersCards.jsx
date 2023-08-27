import React from "react";

const TeachersCards = ({ name, college }) => {
  return (
    <div className="max-w-md mx-4  rounded-md   overflow-hidden flex flex-col justify-center items-center">
      <img
        className="rounded-[50%] h-[10rem]"
        src="https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg?size=626&ext=jpg&ga=GA1.1.1332904761.1693133959&semt=ais"
        alt="Card"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-center text-purple-900">
          {name}
        </h2>
        <h3 className="text-lg font-semibold text-center text-purple-900">
          {college}
        </h3>
      </div>
    </div>
  );
};

export default TeachersCards;
