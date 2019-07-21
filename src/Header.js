import React from 'react';

const Header = function(){
    var headerStyle = {textAlign:'center', padding:20, background: '#000', color: '#fff', textTransform: 'uppercase' };
    return(
        <div style = {headerStyle}>
            Phone Directory
        </div>
    )
}

export default Header;