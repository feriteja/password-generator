import React from "react";

const ModalProgress = () => {
  return (
    <div className="absolute flex justify-center items-center h-screen w-screen bg-black/20 ">
      <div className=" absolute inline-block w-24 h-24 border-t-8 border-t-indigo-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default ModalProgress;
