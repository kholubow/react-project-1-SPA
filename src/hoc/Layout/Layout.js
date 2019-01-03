import React, { Component } from 'react';
import classes from './Layout.css';
import Navbar from '../../components/Navigation/Navbar/Navbar';

class Layout extends Component {
    render () {
        return (
            <div className = { classes.Layout }>
                <Navbar />
                <p>
                    { this.props.children }
                </p>                
            </div>
        );
    }
}


export default Layout;
