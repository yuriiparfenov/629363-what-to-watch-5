import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import films from "./components/mocks/films";

ReactDOM.render(
    <App films={films} />,
    document.querySelector(`#root`)
);
