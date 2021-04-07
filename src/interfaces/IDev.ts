export default interface IDev {
  avatar_url: string;
  bio: string;
  location: string;
  name: string;
  url: string;
  login: string;
}

export interface IDevRepos {
  name: string;
  html_url: string;
  description: string;
}

export interface IDevPosts {
  author: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}
