import React from 'react';
import classes from './LastSection.module.scss';

const LastSection = (props) => {
    return (
        <div className={classes.LastSection}>
            <div className={classes.section}>
                <h2 className={classes.header}>{props.title}</h2>
            </div>
        </div>
    );
};

export default LastSection;