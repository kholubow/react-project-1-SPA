import React from 'react';
import classes from './FooterCenter.css';
import FooterCenterPhotosItem from '../FooterCenterPhotosItem/FooterCenterPhotosItem';
import FooterCenterContactInfoItem from '../FooterCenterContactInfoItem/FooterCenterContactInfoItem';

const footerCenter = (props) => (
<div className = { classes.FooterCenter }>

    <FooterCenterPhotosItem />
    <FooterCenterContactInfoItem />

</div>
);
    

export default footerCenter;
