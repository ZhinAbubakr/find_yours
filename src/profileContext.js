import { createContext, useState } from "react";

export const ProfileContext = createContext();
export const ProfileProvider = (props) => {
  const [profile, setProfile] = useState([]);

  return (
    <ProfileContext.Provider value={[profile, setProfile]}>
      {props.children}
    </ProfileContext.Provider>
  );
};