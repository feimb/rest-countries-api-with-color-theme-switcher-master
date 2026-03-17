import { useState } from "react";
import Header  from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
function App() {

    return (
        <>
            <Routes >
                <Route path="/country/:name" element={<Country />} />
                <Route path="/" element={<Home />} />

            </Routes>
        </>
    );
}

export default App;
