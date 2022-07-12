import { DocumentData } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import CardPassword from "../../components/card/CardPassword";
import { PasswordDataInt } from "../../constant/type/structureData";
import {
  UserState,
  userStateContextProps,
} from "../../context/UserStateContext";
import { getUserPassData } from "../../firebase/firestore";

const Profile = () => {
  const { user } = UserState() as userStateContextProps;
  const [userData, setUserData] = useState<PasswordDataInt>();

  const getData = async () => {
    if (!user) return;
    try {
      const data = await getUserPassData(user);
      console.log(data);
      setUserData(data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen  ">
      <div className=" flex items-center  mt-2 border-b-2 sm:border-none p-2 ">
        <div className="flex items-center justify-center h-10 w-10 bg-red-400 rounded-full mr-2">
          <h1>{user?.email?.charAt(0).toUpperCase()}</h1>
        </div>
        <h1>{user?.email}</h1>
      </div>
      <div className="p-2">
        <h1>Your password:</h1>
        <div>
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
