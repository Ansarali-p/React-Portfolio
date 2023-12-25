import React, { useRef } from "react";
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcone from'../../assets/facebook-icon.png';
import TwitterIcone from'../../assets/twitter.png';
import YoutubeIcone from'../../assets/youtube.png';
import InstagramIcone from'../../assets/instagram.png';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Send !');
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id="contactPage" style={{background:'red'}}>
            <div id="clients">
                <h1 className="contactpageTitle">My clients</h1>
                <p className="clientsDesc">
                    I have the oppertunity to work with a diverse groups of companies.
                    Some of the notable companies I have worked with includes

                </p>
                <div className="clientsImgs">
                    <img src={Walmart} alt="client" className="clientsImg"/>
                    <img src={Adobe} alt="client" className="clientsImg"/>
                    <img src={Microsoft} alt="client" className="clientsImg"/>
                    <img src={Facebook} alt="client" className="clientsImg"/>

                </div>
                </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the from below to discus any work opportunities.</span>
                <form className="contactFrom" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your name"/>
                    <input type="email" className="email" placeholder="Your Email"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your message"></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcone} alt="Facebook" className="link"/>
                        <img src={TwitterIcone} alt="Twitter" className="link"/>
                        <img src={YoutubeIcone} alt="Youtube" className="link"/>
                        <img src={InstagramIcone} alt="Instagram" className="link"/>

                    </div>

                </form>

            </div>
            

        </section>
    )
}
export default Contact