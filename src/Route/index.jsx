import { Routes, Route } from "react-router-dom";
import Welcome from "../Pages/Welcome";
import SlideOne from "../Pages/SlideOne";
import SlideTwo from "../Pages/SlideTwo";
import SlideThree from "../Pages/SlideThree";

export default function RoutesIndex(){

    return(
        <>
        <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/slideone" element={<SlideOne />} />
        <Route path="/slidetwo" element={<SlideTwo />} />
        <Route path="/slidethree" element={<SlideThree />} />
        </Routes>
        </>
    )
}