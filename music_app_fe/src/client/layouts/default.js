import Header from "../components/Header";
import {  Outlet } from "react-router-dom";
import Footer from "../components/Footer";


function Default() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Default;