import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "../firebase.config";

interface userInput {
  email: string;
  password: string;
}

const signUpUser = async ({ email, password }: userInput) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    return user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error.code;
    }
    throw "somethingWrong";
  }
};

const signInUser = async ({ email, password }: userInput) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    return user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error.code;
    }
    throw "somethingWrong";
  }
};

const signByGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(response);
    const token = credential?.accessToken;
    // The signed-in user info.
    return response.user;
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw error.code;
    }
    throw "somethingWrong";
  }
};

const signOutUser = async () => {
  await signOut(auth);
};

export { signUpUser, signInUser, signOutUser, signByGoogle };
