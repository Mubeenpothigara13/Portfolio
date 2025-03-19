import { NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import { FaHome } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Header () {


    return (

        <>
        <div className="header">


<div className="navbar">

            <div className="logo">
                <h1>Mubeen <span>Pothigara</span></h1>
            </div>


            <div className="nav">
            <label for="chk1" class="toggleMenu"><FaBars /></label>
            <input type="checkbox" name="chk1" id="chk1"/>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Project">Projects</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
           
        </div>




        </div>

        </>
    )
    

}

export default Header;