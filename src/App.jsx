import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Main from "./Main.jsx";

ReactDOM.createRoot(document.getElementById("app")).render(
    <div>
        <Header />
        <Main />
    </div>
);
