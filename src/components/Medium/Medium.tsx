import React, { useEffect, useState } from "react";
import axios from "axios";
import { IMediumPosts } from "../../interfaces/IMediumPosts";
import {
  Label,
  DocumentCard,
  DocumentCardDetails,
  DocumentCardImage,
} from "@fluentui/react";
import Button from "../Button/Button";
import "./styles.css";


const Medium = () => {
  const [posts, setPosts] = useState<IMediumPosts[]>([]);
  const mediumUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@maicon.ferreira793";

  useEffect(() => {
    axios.get(mediumUrl).then((response) => setPosts(response.data.items));
  }, []);

  return (
    <div className="container-projects">
      {posts.map((posts) => {
        return (
          <div>
            <div className="large">
              <DocumentCard
                className="card-style"
                onClick={() => (window.location.href = posts.link)}
              >
                <DocumentCardImage
                  height={320}
                  width={320}
                  imageSrc={posts.thumbnail}
                />

                <DocumentCardDetails className="card">
                  <Label>{posts.author}</Label>
                  <Label>{posts.pubDate}</Label>
                  <Label>{posts.title}</Label>

                  <Button
                    text="ver post"
                    handleClick={() => (window.location.href = posts.link)}
                  />
                </DocumentCardDetails>
              </DocumentCard>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Medium;
