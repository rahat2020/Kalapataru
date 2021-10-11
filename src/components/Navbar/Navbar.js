import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ isOpen, setOpen }) {
    const [showbar, setTopbar] = useState(false)

    const changeBack = () => {
        if (window.scrollY >= 80) {
            setTopbar(true)
        }
        else {
            setTopbar(false)
        }
    }
    window.addEventListener('scroll', changeBack)
    return (
        <div className="">
            <div className={"Topbar " + (isOpen && "active")} id={showbar ? "topbar" : " "}>
                <div className="wrapper">
                    <div className="left">
                        <Link to="/" className="logo">
                            <span className="kalpataru">kalpataru</span>
                        </Link>
                    </div>
                    <div className="right">
                        <div className="hamburger" onClick={() => setOpen(!isOpen)}>
                            <span className="line1"></span>
                            <span className="line1"></span>
                            <span className="line1"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
