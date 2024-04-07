import React from 'react'
import style from './navbar.module.css';

const Navbar = () => {
  return (
    
    <nav className={style.nav}>
        <div className={style.logo}>
            <h1>Umiam</h1>
        </div>

        <ul className={style.list}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/image-gallery">Image Gallery</a></li>
        </ul>

        <div className={style.dev}>
            <p>Dev Team</p>
        </div>
    </nav>
    
  )
}

export default Navbar