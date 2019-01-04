import React from 'react';
import companyLogo from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className = { classes.Logo }>
        <img src = { companyLogo } /> 
    </div>
);

export default logo;
