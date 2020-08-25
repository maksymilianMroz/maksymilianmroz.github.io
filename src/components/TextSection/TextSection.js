import React from 'react';
import classes from './TextSection.module.scss';

const TextSection = (props) => {
    return (
        <div className={classes.TextSection}>
            <div className={classes.section}>
                <h1 className={classes.section__header}>{props.title}</h1>
                <p className={classes.section__content__one}>{props.firstLine} <span className={classes.section__content__one_color}>{props.firstLineDecor}</span></p>
                <p className={classes.section__content__two}>{props.par} <a href='#'>{props.button}</a> </p>
            </div>
        </div>
    );
};

export default TextSection;