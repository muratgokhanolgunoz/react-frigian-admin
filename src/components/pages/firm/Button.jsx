import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const LogoButton = props => {

    const { icon, value, color, styles, click, tooltipText, tooltipPlacement } = props;

    return (
        <Fragment>
            <OverlayTrigger
                key={tooltipPlacement}
                placement={tooltipPlacement}
                overlay={
                    <Tooltip id={`tooltip-${tooltipPlacement}`}>
                        {tooltipText}
                    </Tooltip>
                }
            >
                <span className={`button ${color} ${styles}`} style={{ cursor: "pointer" }} onClick={() => click()}>
                    {icon && icon}{value}
                </span>
            </OverlayTrigger>
        </Fragment>
    )
}

LogoButton.propTypes = {
    value: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.element,
    styles: PropTypes.string.isRequired,
    click: PropTypes.func
}

export default LogoButton;