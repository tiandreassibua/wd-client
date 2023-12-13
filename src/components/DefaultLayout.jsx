import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto font-roboto">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default DefaultLayout;
