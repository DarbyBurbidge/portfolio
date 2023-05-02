import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Styles/Header.css"

export const Header: React.FC = () => {

    useEffect(() => {
        const active = document.getElementsByClassName("active")
        if(active[0]) {
            const parent = active[0].parentElement
            parent?.classList.add("has-active");
            console.log(parent?.className)
        }
        const hasActive = document.getElementsByClassName("has-active")
        for (let i = 0; i < hasActive.length; i++) {
            if (hasActive[i]) {
                const child = hasActive[i].firstElementChild
                if (!child?.classList.contains("active")) {
                    hasActive[i].classList.remove("has-active");
                }
            }
        }
    });
    

    return (
        <header className="header">
            <div>              
                <div className="header-title-div">
                    <Link className="header-title header-link neon-purple always-on" to="/">The Darby</Link>
                </div>
            </div>
            <nav className="main-nav">
                <ul className="nav-list">
                    
                    <li className="link-container">
                        <NavLink className="home-link header-link neon-purple" to="/">Home</NavLink>
                    </li>
                    <li className="link-container">
                        <NavLink className="contact-link header-link neon-purple" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
} 