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
import DarjaShara1 from "./Screen/DarjaShara1.jsx";
import DarjaShara2 from "./Screen/DarjaShara2.jsx";
import DarjaShara3 from "./Screen/DarjaShara3.jsx";
import DarjaShara4 from "./Screen/DarjaShara4.jsx";
import DarjaShara5 from "./Screen/DarjaShara5.jsx";
import DarjaShara6 from "./Screen/DarjaShara6.jsx";
import DarjaShara7 from "./Screen/DarjaShara7.jsx";
import DarjaShara8 from "./Screen/DarjaShara8.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
    return (
        <>
        
            <Router>
                <Routes>
                    <Route exact path="/Darai-Book-Web-App/" element={<MainScreen/>} />
                    <Route exact path="/Darai-Book-Web-App/home" element={<HomeScreen/>} />
                     <Route exact path="/Darai-Book-Web-App/home/darja1" element={<Darja1/>} />
                    <Route exact path="/Darai-Book-Web-App/home/darja2" element={<Darja2/>} />
                    <Route exact path="/Darai-Book-Web-App/home/darja3" element={<Darja3/>} />
                    <Route exact path="/Darai-Book-Web-App/home/darja4" element={<Darja4/>} />
                    <Route exact path="/Darai-Book-Web-App/home/darja5" element={<Darja5/>} />
                    <Route exact path="/Darai-Book-Web-App/home/darja6" element={<Darja6/>} />
                    <Route exact path="/Darai-Book-Web-App/home/darja7" element={<Darja7/>} />
                    <Route exact path="/Darai-Book-Web-App/home/darja8" element={<Darja8/>} />
                <Route exact path="/Darai-Book-Web-App/home/darjaShara1" element={<DarjaShara1/>} />
                    <Route exact path="/Darai-Book-Web-App/home/darjaShara2" element={<DarjaShara2/>} />
                    <Route exact path="/Darai-Book-Web-App/home/darjaShara3" element={<DarjaShara3/>} />
                    <Route exact path="/Darai-Book-Web-App/home/darjaShara4" element={<DarjaShara4/>} />
                    <Route exact path="/Darai-Book-Web-App/home/darjaShara5" element={<DarjaShara5/>} />
                    <Route exact path="/Darai-Book-Web-App/home/darjaShara6" element={<DarjaShara6/>} />
                    <Route exact path="/Darai-Book-Web-App/home/darjaShara7" element={<DarjaShara7/>} />
                    <Route exact path="/Darai-Book-Web-App/home/darjaShara8" element={<DarjaShara8/>} />
              
                
                </Routes>
           
            </Router>
        </>
    );
};

export default App;
