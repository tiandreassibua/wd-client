import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "antd";
import { getUserAuth, logout } from "../functions";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
    const navigate = useNavigate();
    const user = getUserAuth();

    const handleLogout = async (e) => {
        e.preventDefault();
        logout();
        navigate("/");
    };

    return (
        <div className="w-full font-roboto shadow-sm">
            <div className="max-w-7xl mx-auto flex py-6 justify-between items-center">
                <div>
                    <Link to="/">
                        <img src={logo} alt={logo} className="h-10" />
                    </Link>
                </div>
                <nav className="flex gap-x-10">
                    <Link
                        to="/"
                        className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        to="/"
                        className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                    >
                        Syarat & Ketentuan
                    </Link>
                    <Link
                        to="/"
                        className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                    >
                        Pesanan
                    </Link>

                    {localStorage.getItem("access_token") ? (
                        <Dropdown
                            className="hover:cursor-pointer"
                            menu={{
                                items: [
                                    {
                                        key: 1,
                                        label: (
                                            <span
                                                onClick={() => alert("profile")}
                                                className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                                            >
                                                Profile
                                            </span>
                                        ),
                                    },
                                    {
                                        key: 1,
                                        label: (
                                            <span
                                                onClick={handleLogout}
                                                className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                                            >
                                                Logout
                                            </span>
                                        ),
                                    },
                                ],
                            }}
                        >
                            <span className="text-lg font-semibold text-neutral-800 flex items-center gap-x-2">
                                <FaRegUserCircle size={25} />
                                <span className="text-blue-500">
                                    {user.firstName}
                                </span>
                            </span>
                        </Dropdown>
                    ) : (
                        <Link
                            to="/login"
                            className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                        >
                            Login
                        </Link>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default Header;
