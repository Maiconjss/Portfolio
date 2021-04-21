import React from 'react';
import {DefaultButton} from '@fluentui/react';
import './styles.css';

interface IButton {
    text: string;
    handleClick: () => void;
}

const Button = (IButton:IButton) => {

    return(
        <DefaultButton className="btn" text={IButton.text} onClick={IButton.handleClick} />
    )
}

export default Button;