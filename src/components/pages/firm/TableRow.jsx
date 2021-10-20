/* eslint-disable eqeqeq */
import React, { Fragment } from 'react';
import TableButton from './TableButton';
import { CgCloseR, CgCheckR } from 'react-icons/cg';

const TableRows = props => {
    const { firmDetails } = props
    return (
        <Fragment>
            <tr>
                <td>{firmDetails.firm_id}</td>
                <td>{firmDetails.subdomain}</td>
                <td>{firmDetails.firm_name}</td>
                <td>{firmDetails.package}</td>
                <td style={{ textAlign: "center" }}>{firmDetails.max_users}</td>
                <td>{firmDetails.payment}</td>
                <td style={{ textAlign: "right" }}>{`${firmDetails.amount}`}</td>
                <td style={{ textAlign: "center" }}>{firmDetails.amount_currency_name}</td>
                <td style={{ textAlign: "center" }}>
                    {
                        firmDetails.active == 1
                            ? <CgCheckR style={{ color: "green" }} />
                            : <CgCloseR style={{ color: "red" }} />
                    }
                </td>
                <td style={{ textAlign: "right" }}>
                    <TableButton firm={firmDetails} />
                </td>
            </tr>
        </Fragment>
    )
}
export default TableRows