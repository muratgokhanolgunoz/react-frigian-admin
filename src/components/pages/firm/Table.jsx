/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import Context from "../../../context/Context";
import FirmContext from "../../../context/FirmContext";
import FirmServices from "../../../services/FirmServices";
import TableRow from "./TableRow";
import { Table as BootstrapTable } from "react-bootstrap";
import TableFilter from "./TableFilter";

const Table = () => {
    const context = useContext(Context);
    const firmContext = useContext(FirmContext);
    const firmServices = new FirmServices();

    const [firmList, setFirmList] = useState([]);
    const [filterCredentials, setFilterCredentials] = useState({
        firm_name: undefined,
        package_id: undefined,
        payment_type: undefined,
        active: 1
    });

    useEffect(() => {
        getFirmList(context.token);
    }, [firmContext.tableOrDetails, filterCredentials]);

    const filterFirmList = (_data, _filter) => {
        let filteredFirmList = _data.filter((item) => {
            for (let key in _filter) {
                if (_filter[key] !== undefined) {
                    if (_filter[key].toString().toLowerCase() !== item[key].toString().substr(0, _filter[key].toString().length).toLowerCase()) {
                        return false;
                    }
                }
            }
            return true;
        });
        return filteredFirmList;
    }

    const getFirmList = (_token) => {
        firmServices
            .getFirmList(_token)
            .then((response) => {
                setFirmList(filterFirmList(response.data.firms, filterCredentials));
            })
            .catch(() => console.log("Error : Firms"));
    };

    return (
        <div id="firm-list">
            <TableFilter
                setFilterCredentials={setFilterCredentials}
            />
            <BootstrapTable
                striped
                hover
                size="sm"
                responsive={true}
                className="table-nowrap"
            >
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Subdomain</th>
                        <th>Firm Name</th>
                        <th>Package</th>
                        <th>Maximum Users</th>
                        <th>Payment Type</th>
                        {
                            firmContext.priceVisibility &&
                            (
                                <th colSpan="2" style={{ textAlign: "center" }}>
                                    Amount
                                </th>
                            )
                        }
                        <th>Active</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {firmList.map((firm) => (
                        <TableRow
                            key={firm.firm_id}
                            firmDetails={firm}
                        />
                    ))}
                </tbody>
            </BootstrapTable>
        </div>
    );
};
export default Table;
