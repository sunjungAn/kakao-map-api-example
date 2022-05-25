import React from 'react';
import './Header.css';

function Header(){
    return(
        <div className = "header">
            <div className='logo'>
                <a>ElementWise</a>
            </div>
            <div className="header_nav">
                <div className = "header_option">
                    <span className='header_optionline1'> ABOUT</span>
                </div>
                <div className = "header_option">
                    <span className='header_optionline1'> CONTACT</span>
                </div>
            </div>
        </div>

    );
}

export default Header;