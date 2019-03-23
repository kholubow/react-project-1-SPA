import React from 'react';
import classes from './FooterRightSocialLinksItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';
import { faTwitterSquare } from '@fortawesome/fontawesome-free-brands';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faInstagram } from '@fortawesome/fontawesome-free-brands';
import { faSkype } from '@fortawesome/fontawesome-free-brands';
import { faTwitch } from '@fortawesome/fontawesome-free-brands';
import { faYoutube } from '@fortawesome/fontawesome-free-brands';
import { faGooglePlus } from '@fortawesome/fontawesome-free-brands';
import { faApple } from '@fortawesome/fontawesome-free-brands';
import { faGooglePlay } from '@fortawesome/fontawesome-free-brands';
import { faAppStore } from '@fortawesome/fontawesome-free-brands';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faWordpress } from '@fortawesome/fontawesome-free-brands';
import { faAws } from '@fortawesome/fontawesome-free-brands';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';


const footerRightSocialLinksItem = (props) => (
<div className = { classes.FooterRightSocialLinksItem }>
    <div className = { classes.ChoosableLocalizationLinks }>
         <p>gdzie jesteśmy</p>
         <hr></hr>
         <div className = { classes.MapPin1 }>
               <FontAwesomeIcon icon={ faMapPin }
                                className = { classes.FontAwesomeIcon } />
                                Bacon ipsum dolor amet shoulder corned beef beef.
               <FontAwesomeIcon icon={ faCaretSquareLeft } 
                                className = { classes.CaretSquareLeftMapPin1 } />
         </div>
         <div className = { classes.MapPin2 }>
               <FontAwesomeIcon icon={ faMapPin }
                                className = { classes.FontAwesomeIcon } />
                                Tenderloin chuck chicken beef ribs.
               <FontAwesomeIcon icon={ faCaretSquareLeft } 
                                className = { classes.CaretSquareLeftMapPin2 } />
         </div>
         <div className = { classes.MapPin3 }>
               <FontAwesomeIcon icon={ faMapPin }
                                className = { classes.FontAwesomeIcon } />
                                Shank venison salami ground round hamburger beef flank.
               <FontAwesomeIcon icon={ faCaretSquareLeft } 
                                className = { classes.CaretSquareLeftMapPin3 } />
         </div>
         <div className = { classes.MapPin4 }>
               <FontAwesomeIcon icon={ faMapPin }
                                className = { classes.FontAwesomeIcon } />
                                Biltong bresaola brisket short ribs buffalo. Meatball tail beef.
               <FontAwesomeIcon icon={ faCaretSquareLeft } 
                                className = { classes.CaretSquareLeftMapPin4 } />
         </div>
    </div>
    <p>jesteśmy także na</p>
    <hr></hr>
    <div className = { classes.SocialLinksMainGroup } >
         <div className = { classes.ImageLinkFacebook } >
            <a href="https://pl-pl.facebook.com/"
               target="_blank" >
               <FontAwesomeIcon icon={ faFacebook } />
            </a>            
         </div>  
         <div className = { classes.ImageLinkTwitter } >
            <a href="https://twitter.com/?lang=pl"
               target="_blank" >
               <FontAwesomeIcon icon={ faTwitterSquare } />
            </a>
         </div> 
         <div className = { classes.ImageLinkLinkedin } >
            <a href="https://pl.linkedin.com/"
               target="_blank" >
               <FontAwesomeIcon icon={ faLinkedin } />
            </a>
         </div>
         <div className = { classes.ImageLinkInstagram } >
            <a href="https://www.instagram.com/"
               target="_blank" >
               <FontAwesomeIcon icon={ faInstagram } />
            </a>
         </div>
         <div className = { classes.ImageLinkSkype } >
            <a href="https://www.skype.com/pl/new/"
               target="_blank" >
               <FontAwesomeIcon icon={ faSkype } />
            </a>
         </div>
         <div className = { classes.ImageLinkAppStore } >
            <a href="https://www.apple.com/pl/ios/app-store/"
               target="_blank" >
               <FontAwesomeIcon icon={ faAppStore } />
            </a>
         </div>
         <div className = { classes.ImageLinkWordpress } >
            <a href="https://wordpress.com/"
               target="_blank" >
               <FontAwesomeIcon icon={ faWordpress } />
            </a>
         </div>
    </div>
    <div className = { classes.SocialLinksSecondGroup } >
         <div className = { classes.ImageLinkTwitch } >
            <a href="https://www.twitch.tv/"
               target="_blank" >
               <FontAwesomeIcon icon={ faTwitch } />
            </a>
         </div>
         <div className = { classes.ImageLinkYoutube } >
            <a href="https://www.youtube.com/?gl=PL&hl=pl"
               target="_blank" >
               <FontAwesomeIcon icon={ faYoutube } />
            </a>
         </div>
         <div className = { classes.ImageLinkGooglePlus } >
            <a href="https://www.google.pl/"
               target="_blank" >
               <FontAwesomeIcon icon={ faGooglePlus } />
            </a>
         </div>
         <div className = { classes.ImageLinkApple } >
            <a href="https://www.apple.com/pl/"
               target="_blank" >
               <FontAwesomeIcon icon={ faApple } />
            </a>
         </div>    
         <div className = { classes.ImageLinkGooglePlay } >
            <a href="https://play.google.com/store"
               target="_blank" >
               <FontAwesomeIcon icon={ faGooglePlay } />
            </a>
         </div>
         <div className = { classes.ImageLinkGithub } >
            <a href="https://github.com/"
               target="_blank" >
               <FontAwesomeIcon icon={ faGithub } />
            </a>
         </div>
         <div className = { classes.ImageLinkAws } >
            <a href="https://aws.amazon.com/"
               target="_blank" >
               <FontAwesomeIcon icon={ faAws } />
            </a>
         </div>   
    </div>

</div>
);
    

export default footerRightSocialLinksItem;
