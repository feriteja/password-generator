import { DocumentData } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import CardPassword from "../../components/card/CardPassword";
import Toast from "../../components/toast/Toast";
import { PasswordDataInt } from "../../constant/type/structureData";
import {
  UserState,
  userStateContextProps,
} from "../../context/UserStateContext";
import { getUserPassData } from "../../firebase/firestore";

const Profile = () => {
  const { user, messageToast, showToast } =
    UserState() as userStateContextProps;
  const [userData, setUserData] = useState<PasswordDataInt>();

  useEffect(() => {
    const getData = async () => {
      if (!user) return;
      try {
        const data = await getUserPassData(user);
        console.log(data);
        setUserData(data);
      } catch (error) {}
    };

    getData();
  }, [user]);

  return (
    <div className="min-h-screen md:grid md:grid-cols-7  ">
      <Toast message={messageToast} showToast={showToast} />
      <div className="flex items-center md:col-span-2  mt-2 border-b-2 sm:border-none p-2 ">
        <div className="flex items-center justify-center h-10 w-10 bg-red-400 rounded-full mr-2">
          <h1>{user?.email?.charAt(0).toUpperCase()}</h1>
        </div>
        <h1>{user?.email}</h1>
      </div>
      <div className="md:col-span-5 p-2 bg-red-400 w-auto">
        <h1 className="font-semibold text-lg">Your password:</h1>
        <div className="mt-3">
          {userData &&
            userData.userPassword.map((user) => {
              return <CardPassword key={user.password} {...user} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
