import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/Auth";
import { useNavigate } from "react-router-dom";

function Account() {

  const [profile, setProfile] = useState({})
  const Naviagte = useNavigate()
  const { user } = useAuthContext();
  useEffect(() => {
    setProfile(user)
    console.log({ user });
  }, []);
  return <div>
    <div>
      <img className="h-[60px]" src={profile.profilePicture} alt="" />
      <p className="text-black dark:text-white m-1 p-1 text-lg ">Name : {profile.name}</p>
      <p className="text-black dark:text-white m-1 p-1 text-lg ">Email: {profile.email}</p>
      <p className="text-black dark:text-white m-1 p-1 text-lg ">Account created on: {profile.createdAt}</p>
    </div>
    
    <div>
      <button onClick={() => Naviagte("/")}>Home</button>
    </div>
  </div>;
}

export default Account;
