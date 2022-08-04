import "./mystyles.scss";
import foto from "./content/foto.jpg";
import React from "react";
import { createRoot } from "react-dom/client";
import {MiComponente} from "./MiComponente";


console.log('Hola mundo');
const img = document.createElement("img");
img.src= foto;
document.getElementById("imgContainer").appendChild(img);


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<MiComponente />);


