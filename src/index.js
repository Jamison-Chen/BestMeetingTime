import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import "./components/css/Common.css";
import MyRoutes from "./components/MyRoutes.js";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <div className="App">
                <MyRoutes />
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
