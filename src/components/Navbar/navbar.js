import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contacImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';
const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true}
                offset={-50} duration={500} className="desktopMenuItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true}
                offset={-40} duration={500} className="desktopMenuItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true}
                offset={-50} duration={500} className="desktopMenuItem">Portfolio</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={true}
                offset={-50} duration={500} className="desktopMenuItem">Clients</Link>

            </div>
            <button className="desktoMenubut" onClick={() =>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
            <img src={contacImg} alt="" className="desktopMenuImg"/>Contact Me</button>

            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setshowMenu(!showMenu)}/>
            <div className="navmenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true}
                offset={-50} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true}
                offset={-40} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true}
                offset={-50} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={true}
                offset={-50} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>Clients</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true}
                offset={-50} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>Contact</Link>

            </div>
        </nav>
    );
}
export default Navbar