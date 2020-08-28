import React from 'react';
import ItemUser from './../ItemUser/ItemUser.js'
import logo from './../../assets/logo.png'

export default function HeaderSpecial() {
    return (
        <div className="header-special" >
            <div className="container">
                <div className="header-special__logo">
                   <img src={logo} alt=""></img>
                </div>
                <ItemUser user={{ name: 'Victor Prada', img: '#333' }} />
            </div>
        </div>
    )
}