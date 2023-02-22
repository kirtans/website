import React from "react";
import { Helmet } from 'react-helmet';

import BlogList from "../../components/BlogList/BlogList";
import Blog20230207 from "./blog20230207";
import Blog20230220 from "./blog20230220";

const Blog = () => {
  return (
    <div className="blogContent">
        <Helmet>
            <title>Kirtan Patel</title>
            <meta name="description" content="Hi! I am Kirtan Patel. There my thoughts on tech, education, and sharing positivity." />
            <meta name="theme-color" content="#222222" />
        </Helmet>
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
