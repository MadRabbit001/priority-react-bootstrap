import React from "react";
import {Route,Routes} from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/Home/Home";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    )
}

export default App;
