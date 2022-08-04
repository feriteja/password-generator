import React, { useState } from "react";

interface props {
  showToast: boolean;
  message: string;
}

const Toast = (props: props) => {
  return (
    <div
      className={`fixed bottom-10 ${
        props.showToast
          ? "translate-y-0 opacity-100 py-1 rounded-md "
          : "translate-y-20 opacity-0  rounded-full"
      }  -translate-x-[50%] left-[50%]    inline-block mx-auto px-3  bg-black/40 duration-300 z-20 overflow-hidden  text-white font-semibold`}
    >
      {props.message}
    </div>
  );
};

export default Toast;
