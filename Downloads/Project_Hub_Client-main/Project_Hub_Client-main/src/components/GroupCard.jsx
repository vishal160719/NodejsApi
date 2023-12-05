import React from "react";

const GroupCard = ({ groupNumber, memberNames }) => {
  return (
    <div className="bg-blue-500 p-4 rounded-lg text-white">
      <h2 className="text-2xl font-bold mb-2">Group {groupNumber}</h2>
      <div>
        <h3 className="text-lg font-semibold">Member Names:</h3>
        <ul className="list-disc ml-6">
          {memberNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroupCard;
