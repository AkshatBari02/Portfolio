import logo from './logo.svg';
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import WatchVideo from './components/WatchVideo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/watch-video' element={<WatchVideo/>}/>
      </Routes>
      
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
      </BrowserRouter>
      
    </div>
);
}

export default App;
