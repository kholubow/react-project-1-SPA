import React from 'react';
import classes from './NavbarNavigationItems.css';
import NavigationItem from './NavbarNavigationItem/NavbarNavigationItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';


const navbarNavigationItems = () => (
    <ul className = { classes.NavigationItems } >
        <NavigationItem link = "/" 
                        exact >
                        <FontAwesomeIcon icon={ faHome } 
                                         className={ classes.FontAwesomeIcon } />
                                         Strona Główna            
        </NavigationItem>

        <NavigationItem link = "/somewhere0" >
                        <FontAwesomeIcon icon={ faPhoneSquare } 
                                         className={ classes.FontAwesomeIcon } />
                                         Kontakt        
        </NavigationItem>

        <NavigationItem link = "/somewhere1" >
                        <FontAwesomeIcon icon={ faUserPlus } 
                                         className={ classes.FontAwesomeIcon } />
                                         Rejestracja           
        </NavigationItem>

        <NavigationItem link = "/somewhere2" >
                        <FontAwesomeIcon icon={ faUserCheck } 
                                         className={ classes.FontAwesomeIcon } />
                                         Logowanie           
        </NavigationItem>

        <NavigationItem link = "/somewhere3" >
                        <FontAwesomeIcon icon={ faSignOutAlt } 
                                         className={ classes.FontAwesomeIcon } />
                                         Wylogowanie           
        </NavigationItem>

        <NavigationItem link = "/somewhere4" >
                        <FontAwesomeIcon icon={ faFileInvoice } 
                                         className={ classes.FontAwesomeIcon } />
                                         Docs           
        </NavigationItem>           
    </ul>

);

export default navbarNavigationItems;
