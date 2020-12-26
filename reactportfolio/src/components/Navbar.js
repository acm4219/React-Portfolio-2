import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"

function Navbar(){
    const style= {
        navbarText: {
            color: "white"
        }
    };
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
                <Link className="navbar-brand" style={style.navbarText} to="/React-Portfolio-2/">Alex McDonald React-Portfolio</Link>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link active" style={style.navbarText} to="/React-Portfolio-2/home">Projects</Link></li>
                    <li className="nav-item"><Link className="nav-link active" style={style.navbarText} to="/React-Portfolio-2/contact">Contact Me</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;