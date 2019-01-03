import React from 'react';
import classes from './NavbarDrawer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';


const navbarDrawer = () => {

    return (
        <div className = { classes.NavbarDrawer } >

            <div className = { classes.InfoBlock } >

                    <FontAwesomeIcon icon={ faChevronCircleLeft } 
                                     className={ classes.FontAwesome } />                    
               
            </div>
            <div className = { classes.InfoBlock } >

                    <FontAwesomeIcon icon={ faChevronCircleLeft } 
                                     className={ classes.FontAwesome } />                    
               
            </div>
            <div className = { classes.InfoBlock } >

                    <FontAwesomeIcon icon={ faChevronCircleLeft } 
                                     className={ classes.FontAwesome } />                    
               
            </div>
            <div className = { classes.InfoBlock } >

                    <FontAwesomeIcon icon={ faChevronCircleLeft } 
                                     className={ classes.FontAwesome } />                    
               
            </div>

        </div>
    );
}

export default navbarDrawer;
