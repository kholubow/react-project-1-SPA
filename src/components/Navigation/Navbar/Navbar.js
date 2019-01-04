import React from 'react';
import classes from './Navbar.css';
import bgNavbar from '../../../assets/images/bg.jpg';
import NavbarNavigationItems from '../NavbarNavigationItems/NavbarNavigationItems';
import SocialLinksNavbar from '../SocialLinksNavbar/SocialLinksNavbar';
import NavbarDrawer from '../NavbarDrawer/NavbarDrawer';
import Logo from '../../Logo/Logo';

const navbar = (props) => (
<div style = {{ backgroundImage: "url(" + bgNavbar + ")" }}
     className = { classes.Navbar } >

        <SocialLinksNavbar />
    <nav className = { classes.NavbarMenu }>
        <NavbarNavigationItems />
    </nav>
        <NavbarDrawer />
        <Logo />
    
</div>
);

export default navbar;
