import React from "react";
import '../../Base.css';
import { Link } from 'react-router-dom';

const BlogList = () => {
    return (
        <div className="BlogList">
            <Link to="/blog/20230702.html">Using Social Media</Link>
        </div>
    );
};

export default BlogList;
