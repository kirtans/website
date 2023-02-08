import React from "react";
import { Link } from 'react-router-dom';

const BlogList = () => {
    return (
        <div className="blogList">
            <Link to="/blog/20230702.html">Using Social Media</Link>
        </div>
    );
};

export default BlogList;
