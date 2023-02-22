import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';

import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import Blog20230207 from "./pages/blog/blog20230207";
import Blog20230220 from "./pages/blog/blog20230220";

function App() {
  return (
    <div className="container">
        <Helmet>
            <title>Kirtan Patel</title>
            <meta name="description" content="Hi! I am Kirtan Patel. There my thoughts on tech, education, and sharing positivity." />
            <meta name="theme-color" content="#222222" />
        </Helmet>
        <div className="header">
            KIRTAN PATEL
        </div>
        <div className="mainBody">
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Blog/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/blog/20230207.html' element={<Blog20230207/>} />
                    <Route path='/blog/20230220.html' element={<Blog20230220/>} />
                </Routes>
            </Router>
        </div>
        <div className="footer">
            <Footer/>
        </div>
    </div>
  );
}

export default App;
