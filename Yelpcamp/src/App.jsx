import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Hero from './components/Hero'
import Header from './components/Header'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='' element={<Hero/>}/>
    <Route path='home' element={<Header/>}/>
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