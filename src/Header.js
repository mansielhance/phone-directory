import React from 'react';
import './Header.css'
import { tsPropertySignature } from '@babel/types';

const Header = function(props){
    
    return(
        <div className = "header">
            {props.heading}
        </div>
    )
}

export default Header;