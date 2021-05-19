import React from 'react';
import './Menu_style/Menu_style.scss';
import { withRouter } from 'react-router-dom';

const MenuIteM = ({title ,iMage, size, linkUrl, history, match, location}) => {
    console.log(history);
    console.log(size);
    return(<div className={`menu-item ${size}`} onClick={e=>{
        history.push(`${match.url}${linkUrl}`);
    }}>
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
}
export default withRouter(MenuIteM);