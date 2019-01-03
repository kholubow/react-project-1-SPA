import React from 'react';
import classes from './NavbarDrawer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';


const navbarDrawer = () => {

    return (
        <div className = { classes.NavbarDrawer } >

            <FontAwesomeIcon icon={ faChevronCircleLeft } 
                             className={ classes.FontAwesomeArrowLeft } />

        </div>
    );
}

export default navbarDrawer;
