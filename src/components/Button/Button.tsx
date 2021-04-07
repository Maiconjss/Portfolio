import React from 'react';
import {DefaultButton} from '@fluentui/react';

interface IButton {
    text: string;
    handleClick: () => void;
}

const Button = (IButton:IButton) => {

    return(
        <DefaultButton text={IButton.text} onClick={IButton.handleClick} />
    )
}

export default Button;