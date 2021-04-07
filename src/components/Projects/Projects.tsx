import React, { useEffect, useState } from "react";
import axios from "axios";
import { IDevRepos } from "../../interfaces/IDevRepo";
import { Label } from "@fluentui/react";

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
          <div style={{ display: "flex" }}>
            <Label>{repo.html_url}</Label>
            <Label>{repo.name}</Label>
            <Label>{repo.description}</Label>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
