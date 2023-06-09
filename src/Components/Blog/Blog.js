import "./Blog.css"
import BlogBanner from "./BlogBanner";
import BlogLastPost from "./BlogLastPost";
import {useEffect} from "react";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <div className={"BlogContainer"}>
      <BlogBanner />
      <BlogLastPost />

    </div>
  )
}; export default Blog