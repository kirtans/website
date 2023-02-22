import React from "react";
import { Link } from 'react-router-dom';

const BlogList = () => {
    return (
        <div>
            <h4>Blog Posts</h4>
            <div className="blogLinks">
                <Link className="blogLink" to="/blog/20230207.html">On Using Social Media</Link>
                <Link className="blogLink" to="/blog/20230220.html">On Education</Link>
            </div>
        </div>
    );
};

export default BlogList;
