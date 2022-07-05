import React from 'react'
import { BrowserRouter,Routes,Route,Link, } from 'react-router-dom'
import Nav from '../Nav'
import Abt from '../modules/About'
import Mission from '../modules/Mission'
import Bio from '../modules/Bio'
import Ext from '../modules/Extra'
import Sup from '../modules/Support'

export default function Routss() {
  return (
    <div>
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Abt/>} />
                <Route path="/mission" element={<Mission/>} />
                <Route path="/bio" element={<Bio/>} />
                <Route path="/extra" element={<Ext/>} />
                <Route path="/support" element={<Sup/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
