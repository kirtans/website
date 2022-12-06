import React from "react";
import './Base.css';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <header className="TitleHeader">
          KIRTAN PATEL
        </header>
        <Router>
          <NavBar />
            <Routes>
              <Route path='/' element={<Blog/>} />
              <Route path='/about' element={<About/>} />
            </Routes>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
