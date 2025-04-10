import React from 'react';
import PropTypes from 'prop-types'
import * as PropsTypes from "prop-types";

export const Button = ({
    text ='Some text',
    icon,
    size ='medium',
    variant = 'primary',
    fullWidth = false,
    isDisabled = false,
    onClick,

                       }) => {
    return (
<button className={`button ${variant} ${size}  ${isDisabled ? 'disabled' : ''} ${fullWidth ? 'full-width' : ''} `} onClick={onClick}>
    {icon && <span>{icon}</span>}
    {text}
</button>
    );
};

Button.propTypes = {
    text: PropsTypes.string,
    icon: PropTypes.string,
    size: PropTypes.string,
    variant: PropTypes.string,
    fullWidth: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropsTypes.func,
}
