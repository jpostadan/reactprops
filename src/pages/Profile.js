import React from "react";
import ChangeProfile from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>This is the Profile Page : {username}</h1>
      <ChangeProfile />
    </div>
  );
};

export default Profile;
