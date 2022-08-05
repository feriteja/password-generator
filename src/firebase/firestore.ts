import CryptoJs from "crypto-js";
import { FirebaseError } from "firebase/app";
import { User } from "firebase/auth";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { PasswordDataInt } from "../constant/type/structureData";
import { db } from "../firebase.config";
import { ChipperPass } from "../func/encryptPass";

interface SavePasswordProps {
  password: string;
  site: string;
  user: User | null;
}

const getUserPassData = async (user?: User) => {
  try {
    const userAppPath = doc(
      db,
      "users",
      `${user?.email}`,
      "application",
      "pass-generator"
    );

    const docSnap = await getDoc(userAppPath);

    if (docSnap.exists()) {
      return docSnap.data() as PasswordDataInt;
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error.code;
    }
    throw "somethingWrong";
  }
};

const savePassword = async (props: SavePasswordProps) => {
  try {
    const userAppPath = doc(
      db,
      "users",
      `${props.user?.email}`,
      "application",
      "pass-generator"
    );

    await updateDoc(userAppPath, {
      userPassword: arrayUnion({
        site: props.site,
        password: ChipperPass(props.password),
      }),
    });
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error.code;
    }
    throw "somethingWrong";
  }
};

const deletePassword = async (props: SavePasswordProps) => {
  try {
    const userAppPath = doc(
      db,
      "users",
      `${props.user?.email}`,
      "application",
      "pass-generator"
    );

    await updateDoc(userAppPath, {
      userPassword: arrayRemove({
        site: props.site,
        password: props.password,
      }),
    });
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error.code;
    }
    throw "somethingWrong";
  }
};

export { savePassword, getUserPassData, deletePassword };
