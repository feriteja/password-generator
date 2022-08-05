import { useState } from "react";
import { BiCopy, BiTrash } from "react-icons/bi";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  UserState,
  userStateContextProps,
} from "../../context/UserStateContext";
import { deletePassword } from "../../firebase/firestore";
import { DecriptPass } from "../../func/encryptPass";

interface props {
  site: string;
  password: string;
  refetch: () => void;
}

const CardPassword = (props: props) => {
  const { user, messageToast, showToast } = UserState();
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
    <div className=" flex justify-between shadow-md  px-2 py-3 rounded-md">
      <div>
        <h1 className="text-sm">{props.site}:</h1>
        <p className="font-semibold">{userPassword()}</p>
      </div>

      <div className=" space-x-1">
        <button
          onClick={() => setShowPass((prev) => !prev)}
          className=" rounded-md  border-b-4 border-r-2 -translate-y-1 active:border-none active:translate-y-0 p-2 duration-75 "
        >
          {showPass ? <FiEye size={20} /> : <FiEyeOff size={20} />}
        </button>

        <button
          onClick={copyText}
          className="right-4 rounded-md  border-b-4 border-r-2 -translate-y-1 active:border-none active:translate-y-0 p-2 duration-75 "
        >
          <BiCopy size={20} />
        </button>
        <button
          onClick={() => {
            deletePassword({
              password: props.password,
              site: props.site,
              user: user,
            });
            props.refetch();
          }}
          className="right-4 rounded-md  border-b-4 border-r-2 -translate-y-1 active:border-none active:translate-y-0 p-2 duration-75 "
        >
          <BiTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default CardPassword;
