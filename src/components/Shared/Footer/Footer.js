import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from './FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "GOOD TAILOR" , link: "/emergency"},
        {name: "Pro Tailor" , link: "/checkup"},
        {name: "Rahana the Tailor" , link: "/personal"},
        {name: "Ma-Moni Tailor" , link: "/personal"},
        {name: "Cumilla Dress House" , link: "/personal"}
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Micael Aan" , link: "/emergency"},
        {name: "John Sina" , link: "/checkup"},
        {name: "Steve Jobs" , link: "/personal"},
        {name: "Sina Jobs" , link: "/personal"},
        {name: "Micael John" , link: "/personal"},
    ]
    const services = [
        {name: "Shortening Length" , link: "/emergency"},
        {name: "Lengthening Cut" , link: "/checkup"},
        {name: "Repair" , link: "/personal"},
        {name: "Repair Jents" , link: "/personal"},
        {name: "Repair Any" , link: "/personal"},
    ]
    return (
        <footer className="footer-area clear-both fontContainer">
            <div className="container pt-5">
                <div className="row py-2">
                    <FooterCol key={1} menuTitle={"Extra Links"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Our Tailor" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p style={{margin:0}}>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;