import React from 'react';
import classes from './ToolbarNavigationItem.css';
import { NavLink } from 'react-router-dom';

const toolbarNavigationItem = (props) => (
    <li className = { classes.NavigationItem } >
        <NavLink to = { props.link }
                 activeClassName = { classes.active } 
                 exact = { props.exact } > 
                 { props.children } 
        </NavLink>
    </li>
);

export default toolbarNavigationItem;
