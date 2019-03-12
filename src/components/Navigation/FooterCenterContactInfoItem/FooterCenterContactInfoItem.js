import React from 'react';
import classes from './FooterCenterContactInfoItem.css';
import worldMapImageBackground from '../../../assets/images/world-map.png';

const footerCenterContactInfoItem = (props) => (
<div className = { classes.FooterCenterContactInfoItem }>

    <div className = { classes.WorldMap } >
        <img scr = { worldMapImageBackground } />
    </div>
        
</div>
);
    

export default footerCenterContactInfoItem;
