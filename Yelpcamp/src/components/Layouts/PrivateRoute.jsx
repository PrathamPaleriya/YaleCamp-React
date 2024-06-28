import { Outlet, Navigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import Logo from '../../assets/Logo.svg'

import React from "react";
import { CampgroundContext } from "../../contect/CampgroundContext";
import Header from "../Header";

function PrivateRoute() {
  const { user } = useContext(CampgroundContext);

  return user ? (
    <>
        <div className="flex justify-between w-full my-10 top-8 left-0 px-8 lg:px-28">
          <Link to='/home'>
            <img src={Logo} alt="Logo" />
          </Link>
          
          <Link to="/home" className="text-cream-dark hover:text-rose-600">
            &#8592; &nbsp; Back to campgrounds
          </Link>
        </div>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
