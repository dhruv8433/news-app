import React from "react";

// reusable heaing that take content and display the headingsF
const Heading = ({ content }) => {
  return (
    <div className="custom-heading">
      <h1 className="p-2 secondry-bg  w-40 flex justify-center text-white">
        {content}
      </h1>
    </div>
  );
};

export default Heading;
