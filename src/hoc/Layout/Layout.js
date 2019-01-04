import React, { Component } from 'react';
import classes from './Layout.css';
import Navbar from '../../components/Navigation/Navbar/Navbar';

class Layout extends Component {
    render () {
        return (
            <div className = { classes.Layout }>

                <div className = { classes.Navbar }>
                    <Navbar />
                </div>
                    
                <div className = { classes.LayoutContent }>
                    { this.props.children }
                </div>  

            </div>
        );
    }
}


export default Layout;
