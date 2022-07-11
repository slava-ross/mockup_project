import React from 'react';
import classes from './uiInput.module.css';

const uiInput = React.forwardRef(
    (props, ref) => {
        return (
            <input ref={ref} className={classes.uiInput} {...props} />
        );
    }
);

export default uiInput;