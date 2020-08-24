import React from 'react';
import classes from './PortfolioItem.module.scss';

const PortfolioItem = () => {
    return (
        <div className={classes.PortfolioItem}>
            <div className={classes.infoContainer}>
                <h3 className={classes.infoContainer__header}>
                    Test
                </h3>
                <p className={classes.infoContainer__description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat porttitor consectetur.
                </p>
                <div className={classes.infoContainer__links}>
                    <a href="#" className={classes.repository__link}>Github</a>
                    <a href="#" className={classes.live__link}>Live</a>
                </div>
            </div>
        </div>
    )
};

export default PortfolioItem;