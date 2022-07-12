import { getAuth, User } from "firebase/auth";
import {
  addDoc,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { UserState } from "../context/UserStateContext";
import { auth, db } from "../firebase.config";
import CryptoJs from "crypto-js";

interface SavePasswordProps {
  password: string;
  site: string;
  user: User | null;
}

const savePassword = async (props: SavePasswordProps) => {
  try {
    const userPath = doc(db, "users", `${props.user?.email}`);
    const chiperPass = CryptoJs.AES.encrypt(
      props.password,
      import.meta.env.VITE_APP_CRYPTO_KEY
    ).toString();

    await setDoc(userPath, {
      username: props.user?.email,
    });
    const userAppPath = doc(
      db,
      "users",
      `${props.user?.email}`,
      "application",
      "pass-generator"
    );
    const docPass = await getDoc(userAppPath);

    await setDoc(userAppPath, {
      ...docPass.data(),
      [props.site.toLowerCase()]: chiperPass,
    });
  } catch (error) {
    console.log(error);
  }
};

export { savePassword };
