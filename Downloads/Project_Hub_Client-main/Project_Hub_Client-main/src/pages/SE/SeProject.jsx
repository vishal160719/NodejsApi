import React from "react";
import SubjectCard from "../../components/SubjectCard";
import CardOne from "../../components/CardOne";
import CardTwo from "../../components/CardTwo";
import CardThree from "../../components/CardThree";
import CardFour from "../../components/CardFour";


const SeProject = () => {
  const subjects = ["ioe", "manet", "is", "aids"];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Subject List</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>
    </div>
  );
};

export default SeProject;
