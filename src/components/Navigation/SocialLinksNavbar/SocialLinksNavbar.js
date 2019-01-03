import React from 'react';
import classes from './SocialLinksNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';
import { faTwitterSquare } from '@fortawesome/fontawesome-free-brands';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faInstagram } from '@fortawesome/fontawesome-free-brands';
import { faSkype } from '@fortawesome/fontawesome-free-brands';
import { faTwitch } from '@fortawesome/fontawesome-free-brands';


const socialLinksNavbar = () => (
<div className = { classes.SocialLinksNavbar } >

    <div className = { classes.SocialNumberMailContactOnLeft } >

            <FontAwesomeIcon icon={ faMapMarkerAlt } 
                             className={ classes.FontAwesomeIcon } />
                             ul. Przykład 1a/4, Olsztyn, PL

            <FontAwesomeIcon icon={ faGripLinesVertical } 
                             className={ classes.FontAwesomeLinesVertical } />

            <FontAwesomeIcon icon={ faEnvelope } 
                             className={ classes.FontAwesomeIcon } />
                             example@mail.com

            <FontAwesomeIcon icon={ faGripLinesVertical } 
                             className={ classes.FontAwesomeLinesVertical } />

            <FontAwesomeIcon icon={ faMobileAlt } 
                             className={ classes.FontAwesomeIcon } />
                             +12 345 678 900

    </div>
    <div className = { classes.SocialLinksOnRight } >

            <div className = { classes.ImageLink } >
                <a href="https://pl-pl.facebook.com/"
                   target="_blank" >
                   <FontAwesomeIcon icon={ faFacebook } />
                </a>            
            </div>

            <div className = { classes.ImageLink } >
                <a href="https://twitter.com/?lang=pl"
                   target="_blank" >
                   <FontAwesomeIcon icon={ faTwitterSquare } />
                </a>
            </div>

            <div className = { classes.ImageLink } >
                <a href="https://pl.linkedin.com/"
                   target="_blank" >
                   <FontAwesomeIcon icon={ faLinkedin } />
                </a>
            </div>

            <div className = { classes.ImageLink } >
                <a href="https://www.instagram.com/"
                   target="_blank" >
                   <FontAwesomeIcon icon={ faInstagram } />
                </a>
            </div>

            <div className = { classes.ImageLink } >
                <a href="https://www.skype.com/pl/new/"
                   target="_blank" >
                   <FontAwesomeIcon icon={ faSkype } />
                </a>
            </div>

            <div className = { classes.ImageLink } >
                <a href="https://www.twitch.tv/"
                   target="_blank" >
                   <FontAwesomeIcon icon={ faTwitch } />
                </a>
            </div>

    </div>

</div>
);

export default socialLinksNavbar;
