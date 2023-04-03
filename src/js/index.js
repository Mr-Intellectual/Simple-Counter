//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


//render your react application
let counter = 0;

const setCount = () => {
    const seconds = Math.floor(counter % 60);
    const minutes = Math.floor(counter / 60) % 60;
    const hours = Math.floor(counter / 3600);
    const time = [
      seconds % 10,
      Math.floor(seconds / 10),
      minutes % 10,
      Math.floor(minutes / 10),
      hours % 10,
      Math.floor(hours / 10)
    ];
  
    counter++;
    ReactDOM.render(<Home time={time} />, document.querySelector("#app"));
  };
  
  setInterval(setCount, 1000);
  