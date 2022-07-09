import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase.config";

interface userInput {
  email: string;
  password: string;
  confirmPassword: string;
}
const signUp = async ({ email, password }: userInput) => {
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

const signIn = async ({ email, password }: userInput) => {
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

export { signUp, signIn, signByGoogle };
