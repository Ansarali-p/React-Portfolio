import React from "react";
import './intro.css';
import bg from '../../../assets/image.jpg';
import btnImg from '../../../assets/hireme.png';
import { Link } from 'react-scroll';
const Intro = () => {
    return(
        <section id="intro">
            <div className="introcontent">
                <span className="hello">Hello</span>
                <span className="introtext">I'm <span className="introName">Ansarali</span><br/>React Developer</span>
                <p className="intropara">I am a Skilled React Dveloper with Experirnce in creating<br/> visually appealing and user feiendly Websites and Mobile application</p>
                <Link><button className="but"><img src={btnImg} alt="Hire Me" className="butImg"/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg"/>

        </section>
    );
}

export default Intro ;