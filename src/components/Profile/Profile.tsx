import React, { useEffect, useState } from "react";
import axios from "axios";
import IDev from "../../interfaces/IDev";
import { Label } from "@fluentui/react";
import "./styles.css";
import "../../../src/index.css";

const Profile = () => {
  const [profile, setProfile] = useState<IDev>();
  const gitUser = "https://api.github.com/users/Maiconjss";

  useEffect(() => {
    axios.get(gitUser).then((response) => setProfile(response.data));
  }, []);

  return (
    <div className="profile-container">
      <img className="profile-image" src={profile?.avatar_url} alt="" />
    
     
      <Label style={{ fontSize: "20px", textAlign:'justify' }}>
        {" "}
          Desenvolvedor de Software com experiência em grandes projetos utilizando tecnologias Microsoft. Apaixonado pela 
          vida e por compartilhar conhecimento com todos. Sempre buscando entregar resultados de impacto positivo e com muita qualidade,
          não me limitando apenas ao técnico, mas também entendendo toda as áreas de negócio.
      </Label>

    </div>
  );
};

export default Profile;
