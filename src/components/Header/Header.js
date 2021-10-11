import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar'
import style from './Header.module.css';
export default function Header() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className={style.header}>
            <Navbar isOpen={isOpen} setOpen={setOpen} />
            <Menu isOpen={isOpen} setOpen={setOpen} />
        </div>
    )
}
