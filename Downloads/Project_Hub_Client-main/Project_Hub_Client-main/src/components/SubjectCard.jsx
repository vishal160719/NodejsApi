import React from "react";

const SubjectCard = ({ subject }) => {
  return (
    <div className="bg-blue-500 p-6 rounded-lg text-white">
      <h2 className="text-3xl font-bold mb-3">{subject}</h2>
    </div>
  );
};

export default SubjectCard;
