import logo from './logo.svg';
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './components/Contact';
//import { Newsletter } from './components/NewsLetter';
import { Footer } from './components/Footer';
import WatchVideo from './components/WatchVideo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>


      <Routes>
        <Route path='/watch-video' element={<WatchVideo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
);
}

export default App;
