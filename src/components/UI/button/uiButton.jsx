import React from 'react';
import classes from './uiButton.module.css';

const uiButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.uiBtn}>
            {children}
        </button>
    );
};

export default uiButton;