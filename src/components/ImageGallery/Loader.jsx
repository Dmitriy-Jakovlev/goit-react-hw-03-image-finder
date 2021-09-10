import React from "react";
import Loader from "react-loader-spinner";

const Loaders = () => {
  return (
    <div className="loader spinner">
      <Loader type="ThreeDots" color="#303f9f" height={80} width={80} />
    </div>
  );
};
export default Loaders;
