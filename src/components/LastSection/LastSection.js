import React from 'react';
import classes from './LastSection.module.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab);

const LastSection = (props) => {
    return (
        <div className={classes.LastSection}>
            <div className={classes.contactContainer}>
                <h2 className={classes.contactContainer__header}>{props.title}</h2>

                <a className={classes.contactContainer__socialLinkedin}>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                <a className={classes.contactContainer__socialGithub}>
                    <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>

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