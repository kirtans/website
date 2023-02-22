import React from "react";

import BlogList from "../../components/BlogList/BlogList";
import Blog20230207 from "./blog20230207";
import Blog20230220 from "./blog20230220";

const Blog = () => {
  return (
    <div className="blogContent">
        <div>
            <Blog20230220/>
            <Blog20230207/>
        </div>
        <div className="blogList">
            <BlogList/>
        </div>
    </div>
  );
}

export default Blog;
