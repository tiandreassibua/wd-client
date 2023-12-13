import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
import DefaultLayout from "./components/DefaultLayout";
import HomePage from "./pages/HomePage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import AuthLayout from "./components/AuthLayout";
import RegisterPage from "./pages/RegisterPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <ToastContainer />
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<DefaultLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/:slug" element={<PropertyDetailPage />} />
                    </Route>
                    <Route path="/" element={<AuthLayout />}>
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
