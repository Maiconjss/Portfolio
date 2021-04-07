import React, { useEffect, useState } from "react";
import axios from "axios";
import { IMediumPosts } from "../../interfaces/IMediumPosts";
import { Label } from "@fluentui/react";

const Medium = () => {
  const [posts, setPosts] = useState<IMediumPosts[]>([]);
  const mediumUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@maicon.ferreira793";

  useEffect(() => {
    axios.get(mediumUrl).then((response) => setPosts(response.data.items));
  }, []);

  return (
    <div>
      {posts.map((posts) => {
        return (
          <div>
            <img src={posts.thumbnail} />
            <Label>{posts.author}</Label>
            <Label>{posts.link}</Label>
            <Label>{posts.pubDate}</Label>
            <Label>{posts.title}</Label>
          </div>
        );
      })}
    </div>
  );
};

export default Medium;
