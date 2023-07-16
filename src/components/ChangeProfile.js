import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

const ChangeProfile = () => {
  const { setUsername } = useContext(AppContext);
  const [newUsername, setNewUsername] = useState("");

  return (
    <div>
      <input
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        ChangeProfile
      </button>
    </div>
  );
};

export default ChangeProfile;
