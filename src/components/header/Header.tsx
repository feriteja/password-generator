import React from "react";
import { Link } from "react-router-dom";
import { UserState } from "../../context/UserStateContext";

const Header = () => {
  const { user } = UserState();
  return (
    <header className="py-2 bg-violet-500">
      <nav className="flex items-center justify-between w-full px-4 text-white">
        <Link to="/">
          <h1 className="text-xl font-bold ">Pass Generator </h1>
        </Link>
        <ul className="flex space-x-4  ">
          <Link to="/">
            <li>Home</li>
          </Link>
          {user ? (
            <Link to="/profile">
              <li>Profile</li>
            </Link>
          ) : (
            <>
              <Link to="/signIn">
                <li>SignIn</li>
              </Link>
              <Link to="/signUp">
                <li>SignUp</li>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
