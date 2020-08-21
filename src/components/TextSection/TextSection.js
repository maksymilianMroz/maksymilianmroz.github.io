import React from 'react';
import classes from './TextSection.module.scss';;

const TextSection = () => {
    return (
        <div className={classes.TextSection}>
            <div className={classes.section}>
                <h1 className={classes.section__header}>HEY <br/> THERE.</h1>
                <p className={classes.section__content__one}>My name is Max. I love coding.</p>
                <p className={classes.section__content__two}>I live in Warsaw. Every day I try to learn as much as possible to be better frontend developer. Find out more about me! 🔥</p> 
            </div>
        </div>
    );
};

export default TextSection;