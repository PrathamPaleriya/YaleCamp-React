import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Hero from "./components/Hero";
import Layout from "./components/Layouts/Layout";
import Home from "./components/Home";
import { CampgroundProvider } from "./contect/CampgroundContext";
import Campgrounds from "./components/Campgrounds";
import About from "./components/About";
import Camp from "./components/Camp";
import Test from "./components/Test/Test";
import Signin from "./components/authentication/Signin";
import Login from "./components/authentication/Login";
import PrivateRoute from "./components/Layouts/PrivateRoute";
import AddCampground from "./components/AddCampground";
import AddReview from "./components/AddReview";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<Hero />} />
      <Route  path="home" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="campgrounds" element={<Campgrounds />} />
        <Route path="about" element={<About />} />
        <Route path="camp/:id" element={<Camp />} />
      </Route>
      <Route path="test" element={<Test />} />
      <Route path="create-account" element={<Signin />} />
      <Route path="login" element={<Login />} />
      <Route element={<PrivateRoute/>}>
        <Route path="create-campground" element={<AddCampground/>} />
        <Route path="add-review/:id" element={<AddReview/>} />
      </Route>
    </>
  )
);

export default function App() {
  return (
    <CampgroundProvider>
      <RouterProvider router={router} />
    </CampgroundProvider>
  );
}
