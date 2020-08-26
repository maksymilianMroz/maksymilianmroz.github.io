import React from 'react';
import classes from './LastSection.module.scss';

const LastSection = (props) => {
    return (
        <div className={classes.LastSection}>
            <div className={classes.contactContainer}>
                <h2 className={classes.contactContainer__header}>{props.title}</h2>
                <p className={classes.contactContainer__info}>{props.info}</p>
                <p className={classes.contactContainer__shortSendText}>
                    {props.shortSendText} 
                    <a href="#" className={classes.contactContainer__mailAdress}>
                        {props.mailAdress}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LastSection;