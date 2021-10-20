/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import Context from '../../../context/Context'
import { Table as BootstrapTable } from 'react-bootstrap'
import TableRow from './TableRow'
import FirmServices from '../../../services/FirmServices'
import FirmContext from '../../../context/FirmContext'

const Table = () => {
    const context = useContext(Context);
    const firmContext = useContext(FirmContext);
    const firmServices = new FirmServices();

    const [firmList, setFirmList] = useState([]);

    useEffect(() => {
        getFirmList(context.token)
    }, [firmContext.tableOrDetails])

    const getFirmList = (_token) => {
        firmServices.getFirmList(_token)
            .then((response) => {
                setFirmList(response.data.firms)
            })
            .catch(() => console.log("Error"))
    }

    return (
        <div id="firm-list">
            <BootstrapTable striped hover size="xs" responsive={true} className="table-nowrap">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Subdomain</th>
                        <th>Firm Name</th>
                        <th>Package</th>
                        <th>Maximum Users</th>
                        <th>Payment Type</th>
                        <th colSpan="2" style={{ textAlign: "center" }}>Amount</th>
                        <th>Active</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        firmList.map((firm) => (
                            <TableRow key={firm.firm_id} firmDetails={firm}/>
                        ))
                    }
                </tbody>
            </BootstrapTable>
        </div>
    )
}
export default Table