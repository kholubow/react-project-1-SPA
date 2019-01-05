import React from 'react';
import classes from './Toolbar.css';
import ToolbarNavigationItems from '../ToolbarNavigationItems/ToolbarNavigationItems';

const toolbar = (props) => (
    <div className = { classes.Toolbar } >
        
        <div className = { classes.ToolbarMenu } >
            <ToolbarNavigationItems />
        </div>
        
    </div>
);

export default toolbar;
