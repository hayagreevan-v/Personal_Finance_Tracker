import { BrowserRouter, Route,Routes } from "react-router-dom";
import {Header}  from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/login";
import Dashboard from "../pages/home/Dashboard";

const Navigation = () =>{
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Navigation