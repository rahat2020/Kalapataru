import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

export default function Menu({ isOpen, setOpen }) {
    return (
        <div className={"menu " + (isOpen && "active")} id="menu">
            <div className="row">
                <div className="col-md-7">
                    <ul className="ulItems">
                        <li onClick={() => setOpen(false)}>
                            <Link to="/about" className="liItems">ABOUT</Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link to="/residential" className="liItems" href="#works">RESIDENTIAL</Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link to="/commercial" className="liItems" href="#portfolio">COMMERCIAL</Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link to="/careers" className="liItems" href="#testimonials">CAREERS</Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link to="/vendor" className="liItems" href="#contact">VENDOR CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-5">
                    <div className="image">
                        {/* <img src={imageOne} alt="" /> */}
                    </div>
                </div>
            </div>

        </div>
    )
}
