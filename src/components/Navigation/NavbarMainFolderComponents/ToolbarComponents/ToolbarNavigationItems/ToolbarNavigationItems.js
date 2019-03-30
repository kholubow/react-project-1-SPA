import React from 'react';
import classes from './ToolbarNavigationItems.css';
import NavigationItem from './ToolbarNavigationItem/ToolbarNavigationItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';


const toolbarNavigationItems = () => (
    <ul className = { classes.NavigationItems } >
        <NavigationItem link = "/somewhere5" 
                        exact >
                        <FontAwesomeIcon icon={ faUsers } 
                                         className={ classes.FontAwesomeIcon } />
                                         Wszyscy            
        </NavigationItem>

        <NavigationItem link = "/somewhere6" >
                        <FontAwesomeIcon icon={ faDatabase } 
                                         className={ classes.FontAwesomeIcon } />
                                         Twoje dane        
        </NavigationItem>

        <NavigationItem link = "/somewhere7" >
                        <FontAwesomeIcon icon={ faFolderPlus } 
                                         className={ classes.FontAwesomeIcon } />
                                         Dodaj           
        </NavigationItem>

        <NavigationItem link = "/somewhere8" >
                        <FontAwesomeIcon icon={ faComments } 
                                         className={ classes.FontAwesomeIcon } />
                                         Rozmowa           
        </NavigationItem>

        <NavigationItem link = "/somewhere9" >
                        <FontAwesomeIcon icon={ faUserCog } 
                                         className={ classes.FontAwesomeIcon } />
                                         Edytuj profil           
        </NavigationItem>

        <NavigationItem link = "/somewhere10" >
                        <FontAwesomeIcon icon={ faFileInvoice } 
                                         className={ classes.FontAwesomeIcon } />
                                         Docs           
        </NavigationItem>           
    </ul>

);

export default toolbarNavigationItems;
