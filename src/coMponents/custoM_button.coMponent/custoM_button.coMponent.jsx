import React from 'react';
import './style/custoM_button_style.scss';

const CustoMButton = ({ children, isGoogleSignIn,...otherProps }) => (
    <button {...otherProps} className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`}>
        {children}
    </button>
)

export default CustoMButton;