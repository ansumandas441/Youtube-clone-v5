import React from "react";
import ReactDom from "react-dom/client";
//Importing the app
import App from "./App";
import "./index.css";

//creating a root of our aplication
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
