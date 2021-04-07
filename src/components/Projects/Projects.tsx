import React, { useEffect, useState } from "react";
import axios from "axios";
import { IDevRepos } from "../../interfaces/IDevRepo";
import { Label } from "@fluentui/react";
import Button from "../Button/Button";

const Projects = () => {
  const [repos, setRepos] = useState<IDevRepos[]>([]);

  const gitRepos = "https://api.github.com/users/Maiconjss/repos";
  useEffect(() => {
    axios.get(gitRepos).then((response) => setRepos(response.data));
  }, []);

  return (
    <div>
      {repos.map((repo) => {
        return (
          <div>
            <Label>{repo.html_url}</Label>
            <Label>{repo.name}</Label>
            <Label>{repo.description}</Label>
            <Button
              text="acessar projeto"
              handleClick={() => (window.location.href = repo.html_url)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
