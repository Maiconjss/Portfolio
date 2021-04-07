import React, { useEffect, useState } from "react";
import axios from "axios";
import IDev from "../../interfaces/IDev";
import { Label } from "@fluentui/react";

const Profile = () => {
  const [profile, setProfile] = useState<IDev>();
  const gitUser = "https://api.github.com/users/Maiconjss";

  useEffect(() => {
    axios.get(gitUser).then((response) => setProfile(response.data));
  }, []);

  return (
    <div>
      <Label>QUEM SOU EU</Label>
      <img src={profile?.avatar_url} alt="" />
      <Label>{profile?.name}</Label>
      <Label>{profile?.bio}</Label>
      <Label>{profile?.location}</Label>
      <Label>{profile?.login}</Label>
      <Label>{profile?.url}</Label>
    </div>
  );
};

export default Profile;
