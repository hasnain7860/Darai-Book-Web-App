import React from "react";
import MainScreen from "./Screen/MainScreen.jsx";
import HomeScreen from "./Screen/Home.jsx";
import Darja1 from "./Screen/Darja1.jsx";
import Darja2 from "./Screen/Darja2.jsx";
import Darja3 from "./Screen/Darja3.jsx";
import Darja4 from "./Screen/Darja4.jsx";
import Darja5 from "./Screen/Darja5.jsx";
import Darja6 from "./Screen/Darja6.jsx";
import Darja7 from "./Screen/Darja7.jsx";
import Darja8 from "./Screen/Darja8.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<MainScreen/>} />
                    <Route exact path="/home" element={<HomeScreen/>} />
                     <Route exact path="/home/darja1" element={<Darja1/>} />
                    <Route exact path="/home/darja2" element={<Darja2/>} />
                    <Route exact path="/home/darja3" element={<Darja3/>} />
                    <Route exact path="/home/darja4" element={<Darja4/>} />
                    <Route exact path="/home/darja5" element={<Darja5/>} />
                    <Route exact path="/home/darja6" element={<Darja6/>} />
                    <Route exact path="/home/darja7" element={<Darja7/>} />
                    <Route exact path="/home/darja8" element={<Darja8/>} />
                </Routes>
           
            </Router>
        </>
    );
};

export default App;
