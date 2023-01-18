import "./Blog.css"
import BlogBanner from "./BlogBanner";
import BlogLastPost from "./BlogLastPost";

const Blog = () => {
  return(
    <div className={"BlogContainer"}>
      <BlogBanner />
      <BlogLastPost />

    </div>
  )
}; export default Blog