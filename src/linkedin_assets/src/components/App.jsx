import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreateProfile from "./CreateProfile";
import Home from "./Home"
import Login from "./Login";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/create-profile" element = {<CreateProfile/>} />
                <Route path = "/" element = {<Login />}/>
                <Route path = "/home" element = {<Home />} />
            </Routes>
        </BrowserRouter>
    )
}