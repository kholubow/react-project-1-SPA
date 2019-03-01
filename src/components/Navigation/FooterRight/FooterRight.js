import React from 'react';
import classes from './FooterRight.css';
import FooterRightGoogleMapsItem from '../FooterRightGoogleMapsItem/FooterRightGoogleMapsItem';
import FooterRightSocialLinksItem from '../FooterRightSocialLinksItem/FooterRightSocialLinksItem';

const footerRight = (props) => (
<div className = { classes.FooterRight }>

    <FooterRightGoogleMapsItem />
    <FooterRightSocialLinksItem />

</div>
);
    

export default footerRight;
