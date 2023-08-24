import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from "react";
import DrawerAppBar from "./components/common/header";
import Footer from "./components/common/footer";
import LogIn from "./components/loginPage";
import Home from "./components/home";
import ActionAreaCard from "./components/homePage";
// import './App.css';

function App() {
  return (
    <BrowserRouter>
    <DrawerAppBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LogIn/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
