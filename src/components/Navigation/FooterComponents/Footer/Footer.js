import React from 'react';
import classes from './Footer.css';
import FooterLeft from '../FooterLeftSideComponents/FooterLeft/FooterLeft';
import FooterCenter from '../FooterCenterSideComponents/FooterCenter/FooterCenter';
import FooterRight from '../FooterRightSideComponents/FooterRight/FooterRight';

const footer = (props) => (
<div className = { classes.Footer }>

       <FooterLeft /> 
       <FooterCenter />
       <FooterRight />

</div>
);
    

export default footer;
