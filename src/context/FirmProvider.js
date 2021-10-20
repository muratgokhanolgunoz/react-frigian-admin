import React, { useState } from 'react';
import FirmContext from './FirmContext';

const FirmProvider = props => {

    const [tableOrDetails, setTableOrDetails] = useState(0); // 0 => List, 1 => Details Page
    const [firm, setFirm] = useState({});

    return (
        <FirmContext.Provider
            value={{
                tableOrDetails,
                firm,
                funcHandleSetTableOrDetails: (_page) => setTableOrDetails(_page),
                funcHandleSetSelectedFirm: (_firm) => setFirm(_firm)
            }}
        >
            {props.children}
        </FirmContext.Provider>
    );
}
export default FirmProvider;