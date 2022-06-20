import React from 'react'
import { BrowserRouter,Routes,Route,Link, } from 'react-router-dom'
import Nav from '../Nav'
import Abt from '../modules/About'
import Mission from '../modules/Mission'
import Bio from '../modules/Bio'

export default function Routss() {
  return (
    <div>
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Abt/>} />
                <Route path="/mission" element={<Mission/>} />
                <Route path="/bio" element={<Bio/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
