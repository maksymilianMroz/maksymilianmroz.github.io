import React from 'react';
import classes from './TextSection.module.scss';;

const TextSection = () => {
    return (
        <div className={classes.TextSection}>
            <div className={classes.section}>
                <h1 className={classes.section__header}>Lorem Ipsum</h1>
                <p className={classes.section__content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu orci lorem. Duis varius risus semper massa vestibulum, tincidunt placerat sapien fermentum. Duis nec ultricies eros. In sed quam quis arcu egestas egestas sed eu mi. Suspendisse egestas ullamcorper orci, ac congue felis luctus quis.</p>
            </div>
        </div>
    );
};

export default TextSection;