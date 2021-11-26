import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Button = ({
    icon,
    value,
    styles,
    click,
    tooltipText,
    tooltipPlacement,
}) => {
    return (
        <Fragment>
            {!tooltipText || !tooltipPlacement ? (
                <span
                    className={`button ${styles}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => click()}
                >
                    {icon && icon}
                    {value}
                </span>
            ) : (
                <OverlayTrigger
                    key={tooltipPlacement}
                    placement={tooltipPlacement}
                    overlay={
                        <Tooltip id={`tooltip-${tooltipPlacement}`}>
                            {tooltipText}
                        </Tooltip>
                    }
                >
                    <span
                        className={`button ${styles}`}
                        style={{ cursor: "pointer" }}
                        onClick={() => click()}
                    >
                        {icon && icon}
                        {value}
                    </span>
                </OverlayTrigger>
            )}
        </Fragment>
    );
};

Button.propTypes = {
    icon: PropTypes.element,
    value: PropTypes.string,
    styles: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
    tooltipText: PropTypes.string,
    tooltipPlacement: PropTypes.string,
};

export default Button;
