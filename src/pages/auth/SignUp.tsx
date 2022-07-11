import { SyntheticEvent, useId, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../../firebase/auth";
import InputField from "./components/InputField";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onsignUp = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("asdsa");
    if (password !== confPass) return setError("Password doesn't match");
    console.log("first");

    try {
      await signUpUser({ email, password });
      navigate("/");
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-slate-700 h-screen">
      <div className="w-3/4 max-w-3xl bg-slate-50  py-5 px-4 rounded-md shadow-md">
        <h1 className="text-xl font-semibold">Register</h1>
        {error && (
          <p className="text-center text-red-500 font-semibold tex-base ">
            {error}
          </p>
        )}
        <form onSubmit={onsignUp} className="flex flex-col mt-5 space-y-3">
          <InputField
            title="Email"
            onChange={(e) => setEmail(e)}
            type="text"
            placeHolder="your@mail.com"
          />
          <InputField
            title="Password"
            onChange={(e) => setPassword(e)}
            type="password"
            placeHolder="password"
          />
          <InputField
            title="Confirm Password"
            onChange={(e) => setConfPass(e)}
            type="password"
            placeHolder="confirm password"
          />
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
