import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import UsingSocialMedia from "./pages/blog/blog20230702";

function App() {
  return (
    <div className="container">
        <div className="header">
            KIRTAN PATEL
        </div>
        <div className="mainBody">
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Blog/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/blog/20230702.html' element={<UsingSocialMedia/>} />
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
