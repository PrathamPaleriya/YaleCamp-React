import { useContext, useEffect, useState } from "react";
import React from "react";
import Logo from "../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import Close from "../assets/Close.svg";
import Hamburger from "../assets/Hamburger.svg";
import { CampgroundContext } from "../contect/CampgroundContext";
import authServices from "../appwrite/authServices";
import { BarLoader } from "react-spinners";

function Header() {
  const [icon, setIcon] = useState([Hamburger]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false)

  
  const showNavigation = () => {
    const navLinks = document.querySelector("#navBar");
    if (show) {
      setIcon(Hamburger);
      setShow(false);
    } else {
      setIcon(Close);
      setShow(true)
    }

    navLinks.classList.toggle("top-[-15%]");
  };

  const { user, setUser } = useContext(CampgroundContext);

  useEffect(() => {
    const promiseInfo = authServices.getCurrentUser();
    promiseInfo.then(
      (res) => {
        setUser(res);
      },
      (err) => {
        setUser(null);
      }
    );
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = async () => {
    setLoading(true);

    try {
      await authServices.logout();
      setUser(null);
    } catch (err) {
      setAlert(err);
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex px-8 py-6 lg:px-28 items-center justify-between w-full md:mb-3">
        <Link to={"/home"}>
          <img src={Logo} alt="Logo" />
        </Link>

        <div className="order-2 flex items-center">
          {user ? (
            <div className="relative">
              <button
                onMouseEnter={toggleDropdown}
                onClick={toggleDropdown}
                className="text-cream-dark font-semibold lg:mx-2 mx-4 hover:text-rose-600 hover:shadow-sm"
              >
                {user.name}
              </button>
              {showDropdown && (
                <div
                  className="absolute z-10 mt-2 py-2 w-32 bg-white rounded-md shadow-lg"
                  onMouseLeave={toggleDropdown}
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm w-full text-gray-700 hover:bg-gray-100"
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
              {loading && (
                <div>
                  <BarLoader
                    color={"#000"}
                    loading={loading}
                    width={100}
                    speedMultiplier={3}
                  />
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                rel="Login"
                to="/login"
                className="text-cream-dark font-semibold lg:mx-2 mx-4 hover:text-rose-600 hover:shadow-sm"
              >
                Login
              </Link>
              <Link
                rel="create-account"
                to="/create-account"
                className="hidden lg:inline-flex bg-black font-semibold text-white px-5 py-2 rounded-md hover:bg-white hover:text-cream-dark border-black border-2 hover:border-cream-dark hover:border-2 mx-2"
              >
                Create an account
              </Link>
            </>
          )}

          <button
            className="cursor-pointer  flex justify-center min-w-6 lg:hidden z-10 lg:z-0"
            onClick={showNavigation}
          >
            <img src={icon} alt="hamburger icon" />
          </button>
        </div>

        <div
          id="navBar"
          className="flex absolute lg:static bg-white lg:bg-inherit justify-center items-center  m-auto font-semibold  lg:min-h-fit min-h-[55vh] left-0 top-[-100%] w-full lg:w-[50%] "
        >
          <ul className="flex lg:flex-row flex-col items-end lg:justify-center w-full mx-14 gap-5 me-11 h-10">
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  ` underline-offset-4 decoration-rose-600 hover:underline `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="campgrounds"
                className={({ isActive }) =>
                  ` underline-offset-4 decoration-rose-600 ${
                    isActive
                      ? "text-rose-600"
                      : "text-cream-dark hover:underline"
                  }`
                }
              >
                Campgrounds
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `underline-offset-4 decoration-rose-600 ${
                    isActive
                      ? "text-rose-500"
                      : "text-cream-dark hover:underline"
                  }`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
