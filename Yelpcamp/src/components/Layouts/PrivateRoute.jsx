import { Outlet, Navigate } from "react-router-dom";
import { useContext, useState } from "react";

import React from 'react'
import { CampgroundContext } from "../../contect/CampgroundContext";
import Header from "../Header";

function PrivateRoute() {

    const {user} = useContext(CampgroundContext)

  return  user ? (<><Header/><Outlet/></>) : <Navigate to="/login"/>
}

export default PrivateRoute

