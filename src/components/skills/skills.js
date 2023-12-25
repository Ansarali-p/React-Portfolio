import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a Skilled and passionate web designer with experience in creating visually appealing and user-friendly Websites.I have a strong understanding of design and a keen eye for details. I am proficient in HTML,CSS and JavaScript, as well as design software such as adobe Photoshop and illustrator</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>About some  </p>
                    </div>

                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>About some</p>
                    </div>

                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>About some</p>
                    </div>

                </div>
            </div>
            

        </section>

    )
}

export default Skills