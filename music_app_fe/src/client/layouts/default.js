import Header from "../components/Header";
import {  Outlet } from "react-router-dom";
import Footer from "../components/Footer";


function Default() {
    // const navigate = use


    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Default;