import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import ListingDetails from "./pages/ListingDetails";
import Bookings from "./pages/Bookings";




function App() {
  return (
    <>
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/login' element={<Login/>}/>
      <Route path ='/signup' element={<SignUp/>}/>
<Route path="/listing/:id" element={<ListingDetails />} />
<Route path="/bookings" element={<Bookings />} />

    </Routes>
    </>
  )
}

export default App