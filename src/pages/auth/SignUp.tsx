import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [error, setError] = useState("");

  const signup = (e: SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center items-center bg-slate-700 h-screen">
      <div className="w-3/4 max-w-3xl bg-slate-50  py-5 px-4 rounded-md shadow-md">
        <h1 className="text-xl font-semibold">Register</h1>
        <form onSubmit={signup} className="flex flex-col mt-5 space-y-3">
          <div className="flex flex-col w-full">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
              className="border rounded-md  p-2  "
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="password"
              className="border rounded-md  p-2  "
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confPassword">Confirm Password:</label>
            <input
              id="confPassword"
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="password"
              className="border rounded-md  p-2  "
            />
          </div>
          <input
            type="submit"
            value={"login"}
            className=" cursor-pointer w-full bg-indigo-400 hover:bg-indigo-400/90 rounded-md text-white font-bold py-1  border-b-4 active:border-b-0 border-r-2 active:border-0 border-black/30 -translate-y-1 active:translate-y-0 duration-150 "
          />
        </form>
      </div>

      <p className="text-white/80 text-center mt-3 ">
        already have account ?
        <Link to={"/signin"}>
          <span className="text-indigo-300 cursor-pointer">login</span>
        </Link>
      </p>
      <span className="text-white">or login with</span>
    </div>
  );
};

export default SignUp;
