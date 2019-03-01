import React from 'react';
import classes from './FooterRightGoogleMapsItem.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const footerRightGoogleMapsItem = (props) => (
<div className = { classes.FooterRightGoogleMapsItem }>

        <Map google={props.google} 
             zoom={14}>
        
            <Marker onClick={props.onMarkerClick}
                    name={'Current location'} />

        </Map>

</div>
);
    
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBDAucV3tJFi8nMcW3jLghwhVuveHsmh2I")
})(footerRightGoogleMapsItem);
