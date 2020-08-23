import React from 'react';
import classes from './Portfolio.module.scss';
import PortfolioItem from './PortfolioItem/PortfolioItem';

const Portfolio = () => {
    return (
        <div className={classes.Portfolio}>
            <div className={classes.section}>
                <h4 className={classes.portfolio__header}>My portfolio!</h4>
                <div className={classes.portfolio__items}>

                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    
                </div>
            </div>
        </div>
    );
};

export default Portfolio;