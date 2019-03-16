import React from 'react';
import classes from './FooterCenterContactInfoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';


const footerCenterContactInfoItem = (props) => (
<div className = { classes.FooterCenterContactInfoItem }>

    <p className = { classes.ContactInfoTextSettings } >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <div>
        <FontAwesomeIcon icon={ faMapMarkerAlt } 
                         className={ classes.FontAwesomeIcon } />
                         ul. Przykład 1a/4, Olsztyn, PL    
    </div>
    <div>
        <FontAwesomeIcon icon={ faEnvelope } 
                         className={ classes.FontAwesomeIcon } />
                         example@mail.com
    </div>
    <div>
        <FontAwesomeIcon icon={ faMobileAlt } 
                         className={ classes.FontAwesomeIcon } />
                         +12 345 678 900
    </div>
   
</div>
);
    

export default footerCenterContactInfoItem;
