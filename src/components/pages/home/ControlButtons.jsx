import React from 'react';
import PropTypes from 'prop-types';
import { FiRefreshCcw } from 'react-icons/fi';

const ControlButtons = (props) => {

    const { setCenter, setZoom } = props;

    return (
        <div id="map-control-buttons">
            <button onClick={() => { setCenter({ lat: 39.0, lng: 35.0 }); setZoom(6.8) }}>
                <FiRefreshCcw /></button>
        </div>
    )
}

ControlButtons.propTypes = {
    setCenter: PropTypes.func.isRequired,
    setZoom: PropTypes.func.isRequired
}

export default ControlButtons