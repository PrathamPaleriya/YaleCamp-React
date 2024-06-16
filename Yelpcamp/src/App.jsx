import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Hero from './components/Hero'
import Layout from './components/Layout'
import Home from './components/Home'
import { CampgroundProvider } from './contect/CampgroundContext'
import Campgrounds from './components/Campgrounds'
import About from './components/About'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='' element={<Hero/>}/>
    <Route path='home' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='campgrounds' element={<Campgrounds/>} />
      <Route path='about' element={<About/>} />
    
    </Route>
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