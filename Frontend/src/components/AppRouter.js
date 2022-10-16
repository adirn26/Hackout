import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
//import Login from './Login'
//import SignUp from './SignUp'
import GetFunding from './GetFunding'
import StartJourney from './StartJourney'
import HomePage from './HomePage.js'
import Workshop from './Workshop'
import Networking from './Networking'
import FundStartUp from './FundStartUp'
import Register from './Register'
import Login from './Login'
import Payment from './Payment'
function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
    
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/signup" element={<Register></Register>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/getfunding" element={<GetFunding/>}/>
        <Route path="/startjourney" element={<StartJourney/>}/>
        <Route path="/workshop" element={<Workshop/>}/>
        <Route path="/fundstartup" element={<FundStartUp/>}/>
        <Route path="/networking" element={<Networking/>}/>
        <Route path="/payment" element={<Payment/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default AppRouter