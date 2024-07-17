import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader-container">
      <ClipLoader size={50} color={"#123abc"} loading={true} />
    </div>
  );
};

export default Loader;
