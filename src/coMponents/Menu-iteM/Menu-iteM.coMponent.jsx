import React from 'react';
import './Menu_style/Menu_style.scss'

const MenuIteM = ({title ,iMage, size}) => (
    <div className={`menu-item ${size}`}>
           <div style={{backgroundImage: `url(${iMage})`}} className="background-image"/>
            <div className="content">
                <div className="title">
                    {title.toUpperCase()}
                </div>
                <span className="subtitle">
                    SHOP NOW
                </span>
            </div>
        </div>
)
export default MenuIteM