import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface props {
  onChange: (pass: string) => void;
  placeHolder?: string;
  type: "text" | "password";
  title: string;
}

const InputField: React.FC<props> = (props) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="flex flex-col w-full ">
      <label htmlFor="password">{props.title}</label>
      <div className="flex items-center bg-white p-2 border rounded-md">
        <input
          id="password"
          onChange={(e) => props.onChange(e.target.value)}
          type={!showPass && props.type === "password" ? "password" : "text"}
          placeholder={props.placeHolder || ""}
          className=" w-full rounded-md   outline-none "
        />
        {props.type === "password" && (
          <div onClick={() => setShowPass((prev) => !prev)}>
            {showPass ? <FiEye /> : <FiEyeOff />}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
