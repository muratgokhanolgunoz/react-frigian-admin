/* eslint-disable eqeqeq */
import React, { useContext } from 'react';
import FirmContext from '../../../context/FirmContext';
import FirmDetails from './FirmDetails';
import Table from './Table';

const Index = () => {

    const context = useContext(FirmContext)

    return (
        <div id="firms">
            {
                context.tableOrDetails == 0
                    ? <Table />
                    : <FirmDetails />
            }
        </div>
    )
}
export default Index