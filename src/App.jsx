import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
    return (
        <>
            <SkeletonTheme baseColor="hsl(0 0% 50%)" highlightColor="#444">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:code" element={<Country />} />
                </Routes>
            </SkeletonTheme>
        </>
    );
}

export default App;
