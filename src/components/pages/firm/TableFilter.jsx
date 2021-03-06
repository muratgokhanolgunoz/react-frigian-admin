/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import FirmContext from "../../../context/FirmContext";
import Button from "../../../common/button/Button";
import { Col, Row, Form } from "react-bootstrap";
import { FcClearFilters } from "react-icons/fc";

const TableFilter = (props) => {
    const firmContext = useContext(FirmContext);
    const { setFilterCredentials } = props;

    useEffect(() => {
        setFilterCredentials({
            firm_name: firmContext.filterName,
            package_id:
                firmContext.filterPackage === -1
                    ? undefined
                    : firmContext.filterPackage,
            payment_type:
                firmContext.filterPayment === -1
                    ? undefined
                    : firmContext.filterPayment,
            active:
                firmContext.filterActive === -1
                    ? undefined
                    : firmContext.filterActive,
        });
    }, [
        firmContext.filterName,
        firmContext.filterPackage,
        firmContext.filterPayment,
        firmContext.filterActive,
    ]);

    const handleSetFilterName = (_value) => {
        if (_value.length === 0) {
            firmContext.funcHandleSetFilterName(undefined);
            return;
        }
        firmContext.funcHandleSetFilterName(_value);
    };

    const clearFilter = () => {
        firmContext.funcHandleSetFilterName(undefined);
        firmContext.funcHandleSetFilterPackage(undefined);
        firmContext.funcHandleSetFilterPayment(undefined);
        firmContext.funcHanleSetFilterActive(1); // Default value 1 for active firms
        firmContext.funcHandleSetPriceVisibility(false);
    };

    return (
        <div className="table-filter">
            <Row>
                <Col lg={1}>
                    <br />
                    <Button
                        icon={<FcClearFilters />}
                        styles={"p-3 button-1-no-hover"}
                        tooltipPlacement={"top"}
                        tooltipText={"Clear Filter"}
                        click={clearFilter}
                    />
                </Col>
                <Col lg={4}>
                    <div className="custom-form-group">
                        <label htmlFor="firm-name">
                            <b>Name</b>
                        </label>
                        <input
                            id="firm-name"
                            name="firm-name"
                            type="text"
                            value={
                                firmContext.filterName === undefined
                                    ? ""
                                    : firmContext.filterName
                            }
                            onChange={(_e) =>
                                handleSetFilterName(_e.target.value)
                            }
                        />
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="custom-form-group">
                        <label htmlFor="firm-package">
                            <b>Package</b>
                        </label>
                        <select
                            id="firm-package"
                            name="firm-package"
                            onChange={(_e) =>
                                firmContext.funcHandleSetFilterPackage(
                                    parseInt(_e.target.value)
                                )
                            }
                        >
                            <option
                                value="-1"
                                selected={
                                    firmContext.filterPackage === undefined
                                        ? true
                                        : false
                                }
                            >
                                All
                            </option>
                            {firmContext.packages.map((pack) => (
                                <option
                                    value={pack.id}
                                    selected={
                                        pack.id === firmContext.filterPackage
                                            ? true
                                            : false
                                    }
                                >
                                    {pack.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </Col>
                <Col lg={1}>
                    <div className="custom-form-group">
                        <label htmlFor="firm-payment">
                            <b>Payment</b>
                        </label>
                        <select
                            id="firm-payment"
                            name="firm-payment"
                            onChange={(_e) =>
                                firmContext.funcHandleSetFilterPayment(
                                    parseInt(_e.target.value)
                                )
                            }
                        >
                            <option
                                value="-1"
                                selected={
                                    firmContext.filterPayment === undefined
                                        ? true
                                        : false
                                }
                            >
                                All
                            </option>
                            <option
                                value="1"
                                selected={
                                    firmContext.filterPayment === 1
                                        ? true
                                        : false
                                }
                            >
                                Yearly
                            </option>
                            <option
                                value="2"
                                selected={
                                    firmContext.filterPayment === 2
                                        ? true
                                        : false
                                }
                            >
                                Monthly
                            </option>
                        </select>
                    </div>
                </Col>
                <Col lg={1}>
                    <div className="custom-form-group">
                        <label htmlFor="firm-active">
                            <b>Status</b>
                        </label>
                        <select
                            id="firm-active"
                            name="firm-active"
                            onChange={(_e) =>
                                firmContext.funcHanleSetFilterActive(
                                    parseInt(_e.target.value)
                                )
                            }
                        >
                            <option
                                value="-1"
                                selected={
                                    firmContext.filterActive === undefined
                                        ? true
                                        : false
                                }
                            >
                                All
                            </option>
                            <option
                                value="1"
                                selected={
                                    firmContext.filterActive === 1
                                        ? true
                                        : false
                                }
                            >
                                Active
                            </option>
                            <option
                                value="0"
                                selected={
                                    firmContext.filterActive === 0
                                        ? true
                                        : false
                                }
                            >
                                InActive
                            </option>
                        </select>
                    </div>
                </Col>
                <Col lg={2}>
                    <br />
                    <Form.Check
                        id="firm-price-visibility"
                        name="firm-price-visibility"
                        label="Details"
                        type={"checkbox"}
                        defaultChecked={firmContext.priceVisibility}
                        checked={firmContext.priceVisibility}
                        onChange={(_e) =>
                            firmContext.funcHandleSetPriceVisibility(
                                _e.target.checked
                            )
                        }
                    />
                </Col>
            </Row>
        </div>
    );
};

TableFilter.propTypes = {
    setFilterCredentials: PropTypes.object.isRequired,
};

export default TableFilter;
