import React from 'react';
import './style/custoM_button_style.scss';

const CustoMButton = ({ children, ...otherProps }) => (
    <button {...otherProps} className="custom-button">
        {children}
    </button>
)

export default CustoMButton;