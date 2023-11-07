import { useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import Form from "./components/Form";
import WeatherData from "./components/WeatherData"

function App() {
  return (
    <div >
      <Routes>
       <Route path="/" element={<Form/>}/>
       <Route path="/weather" element={<WeatherData/>}/>
      </Routes>
    </div>
  );
}

export default App;
