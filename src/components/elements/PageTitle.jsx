import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center text-white mb-6">
        {title}
      </h2>
      <hr className=" border-t-2 w-24 border-[#FCA311] mb-10" />
    </div>
  );
};

export default PageTitle;
