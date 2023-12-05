import React from "react";

const CardFour = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">

      <div className="mt-4 flex items-end justify-between">
        <div className="text-center"> {/* Added text-center class */}
          <h1 className="text-title-md font-bold text-black dark:text-white">
            Manet
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CardFour;
