import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const signIn = (e: SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center items-center bg-slate-700 h-screen">
      <div className="w-3/4 max-w-3xl bg-slate-50  py-5 px-4 rounded-md shadow-md">
        <h1 className="text-xl font-semibold">Login</h1>
        <form onSubmit={signIn} className="flex flex-col mt-5 space-y-3">
          <div className="flex flex-col w-full">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              className="border rounded-md  p-2  "
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="text"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
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
        don't have account ?
        <Link to={"/signup"}>
          <span className="text-indigo-300 cursor-pointer">register</span>
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
