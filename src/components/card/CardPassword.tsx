import React, { useState } from "react";
import { DecriptPass } from "../../func/encryptPass";
import { BiCopy } from "react-icons/bi";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  UserState,
  userStateContextProps,
} from "../../context/UserStateContext";

interface props {
  site: string;
  password: string;
}

const CardPassword = (props: props) => {
  const [showPass, setShowPass] = useState(false);
  const { onShowToast } = UserState() as userStateContextProps;
  const copyText = () => {
    const password = DecriptPass(props?.password);
    navigator.clipboard.writeText(password);
    onShowToast(`${props.site} password copied `);
  };
  const userPassword = () => {
    if (!showPass) return "***********************************";
    return DecriptPass(props?.password);
  };

  return (
    <div className=" flex justify-between shadow-md bg-white px-2 py-3 rounded-md">
      <div>
        <h1 className="text-sm">{props.site}:</h1>
        <p className="font-semibold">{userPassword()}</p>
      </div>

      <div className="relative">
        <button
          onClick={() => setShowPass((prev) => !prev)}
          className=" rounded-md  border-b-4 border-r-2 -translate-y-1 active:border-none active:translate-y-0 p-2 duration-75 "
        >
          {showPass ? <FiEye size={26} /> : <FiEyeOff size={26} />}
        </button>

        <button
          onClick={copyText}
          className="right-4 rounded-md  border-b-4 border-r-2 -translate-y-1 active:border-none active:translate-y-0 p-2 duration-75 "
        >
          <BiCopy size={26} />
        </button>
      </div>
    </div>
  );
};

export default CardPassword;
