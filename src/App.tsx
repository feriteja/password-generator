import { SyntheticEvent, useState } from "react";
import { generator } from "./logic/pass-generator";

const App = () => {
  const [passWoord, setPassWoord] = useState("");
  const [base, setBase] = useState("");
  const [site, setSite] = useState("");
  const [special, setSpecial] = useState("");

  const generatePass = (e: SyntheticEvent) => {
    e.preventDefault();

    setPassWoord(generator.type2({ base, site, special }));
  };
  return (
    <div className="flex justify-center items-center  h-screen w-screen bg-slate-700 ">
      <div className="shadow-md  w-3/4 px-5 py-3 rounded-md bg-slate-50">
        <h1 className="text-center text-lg font-semibold">
          Password Generator
        </h1>
        {passWoord && <p>{passWoord}</p>}
        <form onSubmit={(e) => generatePass(e)} className="space-y-3">
          <div className="flex flex-col">
            <label
              htmlFor="base"
              className="after:content-['*'] after:text-red-600 "
            >
              Base
            </label>
            <input
              onChange={(baseText) => setBase(baseText.target.value)}
              type="text"
              id="base"
              placeholder="base pass"
              className="border-collapse border  outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="site"
              className="after:content-['*'] after:text-red-600 "
            >
              Site
            </label>
            <input
              onChange={(site) => setSite(site.target.value)}
              type="text"
              id="site"
              placeholder="site"
              className="border-collapse border outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="special">Special</label>
            <input
              onChange={(special) => setSpecial(special.target.value)}
              type="text"
              id="special"
              placeholder="special"
              className="border-collapse border outline-none"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Generate"
              className=" relative w-full bg-indigo-400 hover:bg-indigo-400/90 rounded-md text-white font-bold py-1  border-b-4 active:border-b-0 border-r-2 active:border-0 border-black/30 -translate-y-1 active:translate-y-0 duration-150 "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
