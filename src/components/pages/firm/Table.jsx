/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import Context from "../../../context/Context";
import FirmContext from "../../../context/FirmContext";
import style from "./Table.module.scss";
import { Table as BootstrapTable } from "react-bootstrap";
import TableFilter from "./TableFilter";
import TableRow from "./TableRow";
import { getFirmList } from "../../../services/FirmServices";

const Table = () => {
    const context = useContext(Context);
    const firmContext = useContext(FirmContext);

    const [firmList, setFirmList] = useState([]);
    const [filterCredentials, setFilterCredentials] = useState({
        firm_name: undefined,
        package_id: undefined,
        payment_type: undefined,
        active: 1,
    });

    useEffect(() => {
        getAllFirmList(context.token);
    }, [firmContext.tableOrDetails, filterCredentials]);

    const filterFirmList = (_data, _filter) => {
        let filteredFirmList = _data.filter((item) => {
            for (let key in _filter) {
                if (_filter[key] !== undefined) {
                    if (
                        _filter[key].toString().toLowerCase() !==
                        item[key]
                            .toString()
                            .substr(0, _filter[key].toString().length)
                            .toLowerCase()
                    ) {
                        return false;
                    }
                }
            }
            return true;
        });
        return filteredFirmList;
    };

    const getAllFirmList = (_token) => {
        getFirmList(_token)
            .then((response) => {
                setFirmList(
                    filterFirmList(response.data.firms, filterCredentials)
                );
            })
            .catch(() => console.log("Error : Firms"));
    };

    return (
        <div>
            <div className={style.firmList}>
                <TableFilter setFilterCredentials={setFilterCredentials} />
            </div>
            <div className={style.firmList} style={{ marginTop: "20px" }}>
                <BootstrapTable
                    striped={true}
                    hover={true}
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
                            {firmContext.priceVisibility && (
                                <th colSpan="2" style={{ textAlign: "center" }}>
                                    Amount
                                </th>
                            )}
                            <th>Active</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {firmList.map((firm) => (
                            <TableRow key={firm.firm_id} firmDetails={firm} />
                        ))}
                    </tbody>
                </BootstrapTable>
            </div>
        </div>
    );
};
export default Table;
