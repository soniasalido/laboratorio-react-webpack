import "./mystyles.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import {App} from "./App";


// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </React.StrictMode>
// )



const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

