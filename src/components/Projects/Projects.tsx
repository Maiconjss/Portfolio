import React, { useEffect, useState } from "react";
import axios from "axios";
import { IDevRepos } from "../../interfaces/IDevRepo";
import {
  Label,
  DocumentCard,
  DocumentCardDetails,
  DocumentCardImage,
} from "@fluentui/react";
import Button from "../Button/Button";
import "./styles.css";

import reactImg from '../../assets/reactJS.png';
import spfxImg from '../../assets/SPFx.png';

const Projects = () => {
  const [repos, setRepos] = useState<IDevRepos[]>([]);

  const gitRepos = "https://api.github.com/users/Maiconjss/repos";
  useEffect(() => {
    axios.get(gitRepos).then((response) => setRepos(response.data));
  }, []);

  return (
    <div className="container-projects">
      {repos.map((repo) => {
        return (
          <div className="large" >
            <DocumentCard className="card-style" onClick={() => (window.location.href = repo.html_url)}>
              <DocumentCardImage
                height={320}
                width={320}
                imageSrc={repo.name.includes('Reactjs') ? reactImg : spfxImg }
              />


              <DocumentCardDetails className="card">
                <Label>{repo.name}</Label>
                <Label>{repo.description}</Label>
                <Button
                  text="DETALHES"
                  handleClick={() => (window.location.href = repo.html_url)}
                />
              </DocumentCardDetails>
            </DocumentCard>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
