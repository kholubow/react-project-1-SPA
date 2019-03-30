import React from 'react';
import classes from './NavbarDrawer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';


const navbarDrawer = () => {

    return (
        <div className = { classes.NavbarDrawer } >

            <div className = { classes.InfoBlock } >

                    <FontAwesomeIcon icon={ faCloudUploadAlt } 
                                     className={ classes.FontAwesome } />

                    <div className = { classes.InfoBlockNumber } >
                         900
                    </div>     

                    <div className = { classes.InfoBlockText } >
                         files uploaded
                    </div>                
               
            </div>
            <div className = { classes.InfoBlock } >

                    <FontAwesomeIcon icon={ faCheck } 
                                     className={ classes.FontAwesome } />    

                    <div className = { classes.InfoBlockNumber } >
                         7219                     
                    </div>    

                    <div className = { classes.InfoBlockText } >
                         projects completed
                    </div>               
               
            </div>
            <div className = { classes.InfoBlock } >

                    <FontAwesomeIcon icon={ faCode } 
                                     className={ classes.FontAwesome } />  

                    <div className = { classes.InfoBlockNumber } >
                         18245                  
                    </div>    

                    <div className = { classes.InfoBlockText } >
                         lines of code written
                    </div>                 
               
            </div>
            <div className = { classes.InfoBlock } >

                    <FontAwesomeIcon icon={ faSmileBeam } 
                                     className={ classes.FontAwesome } />                    

                    <div className = { classes.InfoBlockNumber } >
                         8123                        
                    </div>   

                    <div className = { classes.InfoBlockText } >
                         happy clients today
                    </div>     

            </div>

        </div>
    );
}

export default navbarDrawer;
