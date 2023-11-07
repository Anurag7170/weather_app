import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import "../App.css"

function Form() {
  const navigate = useNavigate();
  const [city, setcity] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();
    setcity("");
    const weatherData = axios.post("/weather", { city });
    console.log(weatherData);
    
    navigate("/weather",{state:{data: weatherData}})
  };

  return (
    <div className="Form">
      <form >
        <h1 className="Form-heading">Enter the City</h1>
        <input type="text" value={city} onChange={(e) => setcity(e.target.value)} />
        <button onClick={handleSumbit}>search</button>
      </form>
    </div>
  );
}

export default Form;