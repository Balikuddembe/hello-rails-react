import React from "react";
import { Routes, Route, BrowserRouter as Router } from "@hotwired/stimulus/dist/types/core/router";
import Greetings from "./Greeting";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element = {<Greetings />} />
            </Routes>
        </Router>
    );
}

export default App;