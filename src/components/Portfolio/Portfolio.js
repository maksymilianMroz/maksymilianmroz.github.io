import React from 'react';
import classes from './Portfolio.module.scss';

const Portfolio = () => {
    return (
        <div className={classes.Portfolio}>
            <div className={classes.section}>
                <h4 className={classes.portfolio__header}>My portfolio!</h4>
            </div>
        </div>
    );
};

export default Portfolio;