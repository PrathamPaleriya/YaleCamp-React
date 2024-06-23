import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Hero from './components/Hero'
import Layout from './components/Layout'
import Home from './components/Home'
import { CampgroundProvider } from './contect/CampgroundContext'
import Campgrounds from './components/Campgrounds'
import About from './components/About'
import Camp from './components/Camp'
import Test from './components/Test/Test'
import Signin from './components/authentication/Signin'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='' element={<Hero/>}/>
    <Route path='home' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='campgrounds' element={<Campgrounds/>} />
      <Route path='about' element={<About/>} />
      <Route path='camp/:id' element={<Camp/>}/>
    </Route>
    <Route path='test' element={<Test/>} />
    <Route path='create-account' element={<Signin/>} />
    </>
  )
)


export default function App() {

  return (
    <CampgroundProvider>
      <RouterProvider router={router} />
    </CampgroundProvider>
  )
}