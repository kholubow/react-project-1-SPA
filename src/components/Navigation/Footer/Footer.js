import React from 'react';
import classes from './Footer.css';
import FooterLeft from '../FooterLeft/FooterLeft';
import FooterCenter from '../FooterCenter/FooterCenter';
import FooterRight from '../FooterRight/FooterRight';

const footer = (props) => (
<div className = { classes.Footer }>

       <FooterLeft /> 
       <FooterCenter />
       <FooterRight />

</div>
);
    

export default footer;
