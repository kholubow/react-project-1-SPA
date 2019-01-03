import React from 'react';
import classes from './Navbar.css';
import bgNavbar from '../../../assets/images/bg.jpg';
import NavbarNavigationItems from '../NavbarNavigationItems/NavbarNavigationItems';

const navbar = (props) => (
<div style = {{ backgroundImage: "url(" + bgNavbar + ")" }}
     className = { classes.Navbar } >

    <nav className = { classes.NavbarMenu }>
        <NavbarNavigationItems />
    </nav>
    
</div>
);

export default navbar;
