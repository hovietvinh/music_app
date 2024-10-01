import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Default() {
    return (
        <div className="flex flex-col min-h-screen">
            
            <div className="fixed top-0 left-0 w-full z-10">
                <Header />
            </div>

            <div className="flex-1 mt-8 mb-8 p-4 overflow-auto">
                <Outlet />
            </div>

            <div className="fixed bottom-0 left-0 w-full z-10">
                <Footer />
            </div>
        </div>
    );
}

export default Default;
