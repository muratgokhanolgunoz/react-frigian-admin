/* eslint-disable eqeqeq */
import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import Button from "../../../common/button/Button";
import { CgCloseR, CgCheckR } from "react-icons/cg";
import FirmContext from "../../../context/FirmContext";

const TableRows = (props) => {
    const { firmDetails } = props;
    const firmContext = useContext(FirmContext);

    const handleClickButton = () => {
        firmContext.funcHandleSetTableOrDetails(1);
        firmContext.funcHandleSetSelectedFirm(firmDetails);
    };

    return (
        <Fragment>
            <tr>
                <td>{firmDetails.firm_id}</td>
                <td>{firmDetails.subdomain}</td>
                <td>{firmDetails.firm_name}</td>
                <td>{firmDetails.package}</td>
                <td style={{ textAlign: "center" }}>{firmDetails.max_users}</td>
                <td>{firmDetails.payment}</td>
                {firmContext.priceVisibility && (
                    <Fragment>
                        <td
                            style={{ textAlign: "right" }}
                        >{`${firmDetails.amount}`}</td>
                        <td style={{ textAlign: "center" }}>
                            {firmDetails.amount_currency_name}
                        </td>
                    </Fragment>
                )}
                <td style={{ textAlign: "center" }}>
                    {firmDetails.active == 1 ? (
                        <CgCheckR style={{ color: "green" }} />
                    ) : (
                        <CgCloseR style={{ color: "red" }} />
                    )}
                </td>
                <td style={{ textAlign: "right" }}>
                    <Button
                        value="Details"
                        styles="button-3"
                        click={handleClickButton}
                    />
                </td>
            </tr>
        </Fragment>
    );
};

TableRows.propTypes = {
    firmDetails: PropTypes.object.isRequired,
};

export default TableRows;
