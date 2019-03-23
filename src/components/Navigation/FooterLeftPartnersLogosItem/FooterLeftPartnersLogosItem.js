import React from 'react';
import classes from './FooterLeftPartnersLogosItem.css';
import partnerLogo1 from '../../../assets/images/partner_logo_1.png';
import partnerLogo2 from '../../../assets/images/partner_logo_2.png';
import partnerLogo3 from '../../../assets/images/partner_logo_3.png';
import partnerLogo4 from '../../../assets/images/partner_logo_4.png';
import partnerLogo5 from '../../../assets/images/partner_logo_5.png';
import partnerLogo6 from '../../../assets/images/partner_logo_6.png';
import partnerLogo7 from '../../../assets/images/partner_logo_7.png';
import partnerLogo8 from '../../../assets/images/partner_logo_8.png';
import partnerLogo9 from '../../../assets/images/partner_logo_9.jpg';


const footerLeftPartnersLogosItem = (props) => (
<div className = { classes.FooterLeftPartnersLogosItem }>

         <p>współpraca</p>
         <hr></hr>
         <div className = { classes.PartnersLogosFirstGroup } >
            <img src = { partnerLogo1 } /> 
            <img src = { partnerLogo2 } /> 
            <img src = { partnerLogo3 } /> 
         </div>
         <div className = { classes.PartnersLogosSecondGroup } >
            <img src = { partnerLogo4 } /> 
            <img src = { partnerLogo5 } /> 
            <img src = { partnerLogo6 } />
         </div>
         <div className = { classes.PartnersLogosThirdGroup } >
            <img src = { partnerLogo7 } />
            <img src = { partnerLogo8 } />
            <img src = { partnerLogo9 } />
         </div>

</div>
);
    

export default footerLeftPartnersLogosItem;
