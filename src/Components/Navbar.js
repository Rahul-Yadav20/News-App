import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = (props) => {

    
    
    const handleStyle = {
        color: props.mode === "dark" ? "white" : "#4D4B4A",
    }
    

    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item  ">
                                <Link className="nav-link" style={handleStyle} aria-current="page" to="/">General</Link>
                            </li>

                            <li className="nav-item  ">
                                <Link className="nav-link" style={handleStyle} to="/business">Business</Link>
                            </li>
                            <li className="nav-item  ">
                                <Link className="nav-link" style={handleStyle} to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item  ">
                                <Link className="nav-link" style={handleStyle} to="/health">Health</Link>
                            </li>
                            <li className="nav-item  ">
                                <Link className="nav-link" style={handleStyle} to="/science">Science</Link>
                            </li>
                            <li className="nav-item  ">
                                <Link className="nav-link" style={handleStyle} to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item  ">
                                <Link className="nav-link" style={handleStyle} to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item  ">
                                <Link className="nav-link" to="/about">AboutUs</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === "dark" ? "light" : "dark"}`}>
                        <input className="form-check-input" onClick={props.toggle} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                    </div>

                   
    
                </div>
            </nav>
        </div>
    )
}


export default Navbar
