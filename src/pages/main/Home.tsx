import { SyntheticEvent, useRef, useState } from "react";
import ModalProgress from "../../components/modal/ModalProgress";
import {
  UserState,
  userStateContextProps,
} from "../../context/UserStateContext";
import { savePassword } from "../../firebase/firestore";
import { generator } from "../../func/pass-generator";

const Home = () => {
  const [passWoord, setPassWoord] = useState<{
    pass: string;
    site: string;
  }>();
  const { user } = UserState() as userStateContextProps;
  const [base, setBase] = useState("");
  const [site, setSite] = useState("");
  const [special, setSpecial] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [message, setMessage] = useState("");

  const generatePass = (e: SyntheticEvent) => {
    e.preventDefault();

    setPassWoord(generator.type2({ base, site, special }));
  };

  const onSavePassword = async () => {
    if (!user) return alert("Please login");
    if (!passWoord?.pass && !passWoord?.site) return;
    setShowLoading(true);
    try {
      await savePassword({
        password: passWoord?.pass,
        site: passWoord?.site,
        user: user,
      });
      setPassWoord(undefined);
      setMessage(`Password ${passWoord.site} is saved`);
      setBase("");
      setSite("");
      setSpecial("");
      setShowLoading(false);
    } catch (error) {
      console.log(error);

      setShowLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center  h-screen w-full  bg-slate-700 ">
      {showLoading && <ModalProgress />}

      <div className="shadow-md  w-3/4 max-w-2xl px-5 py-3 rounded-md bg-slate-50">
        <h1 className="text-center text-lg font-semibold">
          Password Generator
        </h1>
        {message && (
          <p className="text-green-400 text-center font-semibold">{message}</p>
        )}
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
              value={base}
              type="text"
              id="base"
              placeholder="base pass"
              className="border-collapse border rounded-md p-2 outline-none"
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
              value={site}
              type="text"
              id="site"
              placeholder="site"
              className="border-collapse border rounded-md p-2 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="special">Special</label>
            <input
              value={special}
              onChange={(special) => setSpecial(special.target.value)}
              type="text"
              id="special"
              placeholder="special"
              className="border-collapse border rounded-md p-2 outline-none"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Generate"
              className=" relative  w-full bg-indigo-400 hover:bg-indigo-400/90 rounded-md text-white font-bold py-1  border-b-4 active:border-b-0 border-r-2 active:border-0 border-black/30 -translate-y-1 active:translate-y-0 duration-150 "
            />
          </div>
        </form>
        {passWoord?.pass && (
          <div>
            <h2 className="font-semibold">your {passWoord?.site} pass:</h2>
            <div className="flex justify-between mt-2">
              <p>{passWoord?.pass}</p>
              <button
                className="bg-indigo-400 rounded-sm text-white px-2 py-1"
                onClick={onSavePassword}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
