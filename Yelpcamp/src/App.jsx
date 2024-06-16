import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Hero from './components/Hero'
import Layout from './components/Layout'
import Home from './components/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='' element={<Hero/>}/>
    <Route path='home' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
    
    </Route>
    </>
  )
)


export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}