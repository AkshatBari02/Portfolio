import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from "react";
import WeatherApp from "./tempapp";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WeatherApp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
