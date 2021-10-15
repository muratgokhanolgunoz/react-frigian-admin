import React, { useContext } from 'react';
import Context from '../../../context/Context';
import PropTypes from 'prop-types';
import { FiRefreshCcw } from 'react-icons/fi';

const ResetButton = props => {

    const { setCenter } = props;
    const context = useContext(Context);

    return (
        <div id="map-control-buttons">
            <button onClick={() => { setCenter({ lat: 39.0, lng: 35.0 }); context.funcHandleSetMapZoom(6.8) }}>
                <FiRefreshCcw />
            </button>
        </div>
    )
}

ResetButton.propTypes = {
    setCenter: PropTypes.func.isRequired
}

export default ResetButton