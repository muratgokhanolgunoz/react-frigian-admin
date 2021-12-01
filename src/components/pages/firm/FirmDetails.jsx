/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect, Suspense } from "react";
import Context from "../../../context/Context";
import FirmContext from "../../../context/FirmContext";
import { showToast } from "../../../core/functions";
import Logo from "./Logo";
import LogoCropper from "./LogoCropper";
import { FiCheck } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { Col, Row, Container } from "react-bootstrap";
import style from "./FirmDetails.module.scss";
import { updateFirm, getLogo } from "../../../services/FirmServices";

const months = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
];

const FirmDetails = () => {
    const context = useContext(Context);
    const firmContext = useContext(FirmContext);

    const [logo, setLogo] = useState("");
    const [selectedLogo, setSelectedLogo] = useState("");

    const [firmId, setFirmId] = useState(firmContext.firm.firm_id);
    const [accountId, setAccountId] = useState(firmContext.firm.account_id);
    const [active, setActive] = useState(firmContext.firm.active);
    const [amount, setAmount] = useState(firmContext.firm.amount);
    const [amountCurrencyId, setAmountCurrencyId] = useState(
        firmContext.firm.amount_currency
    );
    const [countryId, setCountryId] = useState(firmContext.firm.country_id);
    const [currencyId, setCurrencyId] = useState(firmContext.firm.currency_id);
    const [integratorId, setIntegratorId] = useState(
        firmContext.firm.entegrator
    );
    const [email, setemail] = useState(firmContext.firm.firm_email);
    const [name, setName] = useState(firmContext.firm.firm_name);
    const [taxNo, setTaxNo] = useState(firmContext.firm.firm_tax_no);
    const [latitude, setLatitude] = useState(firmContext.firm.lat);
    const [longitude, setLongitude] = useState(firmContext.firm.long);
    const [maxStorage, setMaxStorage] = useState(
        firmContext.firm.max_storage / 1024 / 1024
    );
    const [maxUsers, setMaxUsers] = useState(firmContext.firm.max_users);
    const [packageId, setPackageId] = useState(firmContext.firm.package_id);
    const [paymentTypeId, setPaymentTypeId] = useState(
        firmContext.firm.payment_type
    );
    const [subdomain, setSubdomain] = useState(firmContext.firm.subdomain);
    const [invoiceMonth, setInvoiceMonth] = useState(
        firmContext.firm.invoice_month
    );
    const [logoPanel, setLogoPanel] = useState(0); // 0 => Preview Panel, 1 => Resize Panel

    useEffect(() => {
        getFirmLogo(context.token);
    }, []);

    const editFirm = (_e) => {
        _e.preventDefault();

        if (
            confirm(
                "Firm informations will be update as follows. Are you sure ?"
            )
        ) {
            const formData = new FormData();
            formData.append("firm_id", firmId);
            formData.append("firm_name", name);
            formData.append("active", active);
            formData.append("firm_email", email);
            formData.append("country_id", countryId);
            formData.append("firm_tax_no", taxNo);
            formData.append("currency_id", currencyId);
            formData.append("package_id", packageId);
            formData.append("max_users", maxUsers);
            formData.append("max_storage", maxStorage * 1024 * 1024);
            formData.append("account_id", accountId);
            formData.append("entegrator", integratorId);
            formData.append("payment_type", paymentTypeId);
            formData.append("amount", amount);
            formData.append("amount_currency", amountCurrencyId);
            formData.append("invoice_month", invoiceMonth);
            formData.append("lat", latitude);
            formData.append("long", longitude);

            updateFirm(context.token, formData)
                .then((response) => {
                    if (response.status === 200) {
                        showToast(
                            "bottom-right",
                            "Firm update successfully",
                            "success"
                        );
                    } else {
                        showToast(
                            "bottom-right",
                            "Firm update failed",
                            "error"
                        );
                    }
                })
                .catch((err) => {
                    showToast(
                        "bottom-right",
                        "Firm update failed. " + err,
                        "error"
                    );
                    console.warn("Error: Firm Update");
                });
        }
    };

    const getFirmLogo = (_token) => {
        getLogo(_token, firmId)
            .then((response) => {
                setLogo(response.data.logo64);
            })
            .catch(() => console.warn("Error: Logo"));
    };

    const handleToggleLogoPanel = () => setLogoPanel(logoPanel === 0 ? 1 : 0);

    const handleOnChangeUploadFile = (_file) => {
        if (_file.size <= 1048576) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedLogo(reader.result);
                handleToggleLogoPanel();
            };
            reader.readAsDataURL(_file);
        } else {
            showToast(
                "bottom-right",
                "File size must be a maximum of 1MB",
                "error"
            );
        }
    };

    const handleChangePreviewLogo = (_logo) => {
        setLogo(_logo);
        handleToggleLogoPanel();
    };

    return (
        <div className={style.firmDetails}>
            <form onSubmit={(_e) => editFirm(_e)}>
                <Container className={style.firmDetailsArea}>
                    <Row>
                        <Col lg="8">
                            <Row>
                                <Col lg="6" md="12">
                                    <span>
                                        <b>Created at :</b>&emsp;
                                    </span>
                                    <span>{firmContext.firm.created_at}</span>
                                </Col>
                                <Col lg="6" md="12">
                                    <span>
                                        <b>Updated at :</b>&emsp;
                                    </span>
                                    <span>{firmContext.firm.updated_at}</span>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col lg="2" sm="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-id">ID</label>
                                        <input
                                            id="firm-id"
                                            name="firm-id"
                                            className={style.cursorPrivate}
                                            type="text"
                                            value={firmContext.firm.firm_id}
                                            readOnly={true}
                                            disabled={true}
                                        />
                                    </div>
                                </Col>
                                <Col lg="3" sm="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-subdomain">
                                            Subdomain
                                        </label>
                                        <input
                                            id="firm-subdomain"
                                            name="firm-subdomain"
                                            className={style.cursorPrivate}
                                            type="text"
                                            value={subdomain}
                                            onChange={(_e) =>
                                                setSubdomain(_e.target.value)
                                            }
                                            disabled={true}
                                            readOnly={true}
                                        />
                                    </div>
                                </Col>
                                <Col lg="7" sm="9">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-name">Name</label>
                                        <input
                                            id="firm-name"
                                            name="firm-name"
                                            type="text"
                                            value={name}
                                            onChange={(_e) =>
                                                setName(_e.target.value)
                                            }
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="4" sm="9">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-name">eMail</label>
                                        <input
                                            id="firm-mail"
                                            name="firm-mail"
                                            type="text"
                                            value={email}
                                            onChange={(_e) =>
                                                setemail(_e.target.value)
                                            }
                                        />
                                    </div>
                                </Col>
                                <Col lg="3" sm="3">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-tax-number">
                                            Tax Number
                                        </label>
                                        <input
                                            id="firm-tax-number"
                                            name="firm-tax-number"
                                            type="number"
                                            value={taxNo}
                                            onChange={(_e) =>
                                                setTaxNo(_e.target.value)
                                            }
                                        />
                                    </div>
                                </Col>
                                <Col lg="3" sm="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-country">
                                            Country
                                        </label>
                                        <select
                                            id="firm-country"
                                            name="firm-country"
                                            onChange={(_e) =>
                                                setCountryId(_e.target.value)
                                            }
                                        >
                                            {firmContext.countries.map(
                                                (country) => (
                                                    <option
                                                        value={country.id}
                                                        selected={
                                                            country.id ===
                                                            countryId
                                                                ? true
                                                                : false
                                                        }
                                                    >{`${country.abb} - ${country.name}`}</option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col lg="3" sm="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-integrators">
                                            Integrator
                                        </label>
                                        <select
                                            id="firm-integrators"
                                            name="firm-integrators"
                                            onChange={(_e) =>
                                                setIntegratorId(_e.target.value)
                                            }
                                        >
                                            {firmContext.integrators.map(
                                                (integrator) => (
                                                    <option
                                                        value={integrator.id}
                                                        selected={
                                                            integrator.id ===
                                                            integratorId
                                                                ? true
                                                                : false
                                                        }
                                                    >
                                                        {integrator.name}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                </Col>
                                <Col lg="2" sm="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-currency">
                                            Currency
                                        </label>
                                        <select
                                            id="firm-currency"
                                            name="firm-currency"
                                            onChange={(_e) =>
                                                setCurrencyId(_e.target.value)
                                            }
                                        >
                                            {firmContext.currencies.map(
                                                (currency) => (
                                                    <option
                                                        value={currency.id}
                                                        selected={
                                                            currency.id ===
                                                            currencyId
                                                                ? true
                                                                : false
                                                        }
                                                    >
                                                        {currency.name}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                </Col>
                                <Col lg="3" sm="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-package">
                                            Package
                                        </label>
                                        <select
                                            id="firm-package"
                                            name="firm-package"
                                            onChange={(_e) =>
                                                setPackageId(_e.target.value)
                                            }
                                        >
                                            {firmContext.packages.map(
                                                (pack) => (
                                                    <option
                                                        value={pack.id}
                                                        selected={
                                                            pack.id ===
                                                            packageId
                                                                ? true
                                                                : false
                                                        }
                                                    >
                                                        {pack.name}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                </Col>
                                <Col lg="2" sm="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-max-users">
                                            Maximum Users
                                        </label>
                                        <input
                                            id="firm-max-users"
                                            name="firm-max-users"
                                            type="number"
                                            value={maxUsers}
                                            onChange={(_e) =>
                                                setMaxUsers(_e.target.value)
                                            }
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="3" sm="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-account-id">
                                            Account ID
                                        </label>
                                        <input
                                            id="firm-account-id"
                                            name="firm-account-id"
                                            type="number"
                                            value={accountId}
                                            onChange={(_e) =>
                                                setAccountId(_e.target.value)
                                            }
                                        />
                                    </div>
                                </Col>
                                <Col lg="2" sm="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-payment">
                                            Payment
                                        </label>
                                        <select
                                            id="firm-payment"
                                            name="firm-payment"
                                            onChange={(_e) =>
                                                setPaymentTypeId(
                                                    _e.target.value
                                                )
                                            }
                                        >
                                            <option
                                                value="1"
                                                selected={
                                                    paymentTypeId === 1
                                                        ? true
                                                        : false
                                                }
                                            >
                                                Yearly
                                            </option>
                                            <option
                                                value="2"
                                                selected={
                                                    paymentTypeId === 2
                                                        ? true
                                                        : false
                                                }
                                            >
                                                Monthly
                                            </option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg="2" sm="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-amount">
                                            Amount
                                        </label>
                                        <input
                                            id="firm-amount"
                                            name="firm-amount"
                                            type="number"
                                            value={amount}
                                            onChange={(_e) =>
                                                setAmount(_e.target.value)
                                            }
                                        />
                                    </div>
                                </Col>
                                <Col lg="2" sm="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-amount-currency">
                                            Amount Currency
                                        </label>
                                        <select
                                            id="firm-amount-currency"
                                            name="firm-amount-currency"
                                            onChange={(_e) =>
                                                setAmountCurrencyId(
                                                    _e.target.value
                                                )
                                            }
                                        >
                                            {firmContext.currencies.map(
                                                (currency) => (
                                                    <option
                                                        value={currency.id}
                                                        selected={
                                                            currency.id ===
                                                            amountCurrencyId
                                                                ? true
                                                                : false
                                                        }
                                                    >
                                                        {currency.name}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                </Col>
                                <Col lg="2" sm="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-invoice-month">
                                            Invoice Month
                                        </label>
                                        <select
                                            id="firm-invoice-month"
                                            name="firm-invoice-month"
                                            onChange={(_e) =>
                                                setInvoiceMonth(_e.target.value)
                                            }
                                        >
                                            {months.map((month) => (
                                                <option
                                                    value={month.id}
                                                    selected={
                                                        month.id ===
                                                        invoiceMonth
                                                            ? true
                                                            : false
                                                    }
                                                >
                                                    {month.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col lg="3" sm="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-database-usage">
                                            Database Usage [GB]
                                        </label>
                                        <input
                                            id="firm-database-usage"
                                            name="firm-database-usage"
                                            className={style.cursorPrivate}
                                            type="text"
                                            value={Number(
                                                firmContext.firm
                                                    .database_usage /
                                                    1024 /
                                                    1024
                                            ).toFixed(3)}
                                            readOnly={true}
                                            disabled={true}
                                        />
                                    </div>
                                </Col>
                                <Col lg="3" sm="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-max-storage">
                                            Maximum Storage [GB]
                                        </label>
                                        <input
                                            id="firm-max-storage"
                                            name="firm-max-storage"
                                            type="number"
                                            value={maxStorage}
                                            onChange={(_e) =>
                                                setMaxStorage(_e.target.value)
                                            }
                                        />
                                    </div>
                                </Col>
                                <Col lg="3" sm="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-storage-usage">
                                            Storage Usage [GB]
                                        </label>
                                        <input
                                            id="firm-storage-usage"
                                            name="firm-storage-usage"
                                            className={style.cursorPrivate}
                                            type="text"
                                            value={Number(
                                                firmContext.firm.storage_usage /
                                                    1024 /
                                                    1024
                                            ).toFixed(3)}
                                            readOnly={true}
                                            disabled={true}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg="4">
                            <Row>
                                <Col lg={{ offset: 8, span: 4 }}>
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-active">
                                            Status
                                        </label>
                                        <select
                                            id="firm-active"
                                            name="firm-active"
                                            onChange={(_e) =>
                                                setActive(_e.target.value)
                                            }
                                        >
                                            <option
                                                value="0"
                                                selected={
                                                    active === 0 ? true : false
                                                }
                                            >
                                                Inactive
                                            </option>
                                            <option
                                                value="1"
                                                selected={
                                                    active === 1 ? true : false
                                                }
                                            >
                                                Active
                                            </option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className={style.editLogo}>
                                        {logoPanel === 0 ? (
                                            <Logo
                                                imageSource={logo}
                                                onChangeUploadFile={
                                                    handleOnChangeUploadFile
                                                }
                                            />
                                        ) : (
                                            <LogoCropper
                                                logo={selectedLogo}
                                                cancelCropAndResize={
                                                    handleToggleLogoPanel
                                                }
                                                changePreviewLogo={
                                                    handleChangePreviewLogo
                                                }
                                            />
                                        )}
                                    </div>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col lg="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-latitude">
                                            Latitude
                                        </label>
                                        <input
                                            id="firm-latitude"
                                            name="firm-latitude"
                                            type="text"
                                            value={latitude}
                                            onChange={(_e) =>
                                                setLatitude(_e.target.value)
                                            }
                                        />
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="custom-form-group">
                                        <label htmlFor="firm-longitude">
                                            Longitude
                                        </label>
                                        <input
                                            id="firm-longitude"
                                            name="firm-longitude"
                                            type="text"
                                            value={longitude}
                                            onChange={(_e) =>
                                                setLongitude(_e.target.value)
                                            }
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <br />
                            <br />
                            <br />
                            <Row>
                                <Col>
                                    <button
                                        className="button button-1"
                                        style={{
                                            fontSize: "1.1em",
                                            cursor: "pointer",
                                            width: "100%",
                                        }}
                                        onClick={() => {
                                            firmContext.funcHandleSetTableOrDetails(
                                                0
                                            );
                                            firmContext.funcHandleSetSelectedFirm(
                                                {}
                                            );
                                        }}
                                    >
                                        <VscChromeClose />
                                        &emsp;CLOSE
                                    </button>
                                </Col>
                                <Col>
                                    <button
                                        type="submit"
                                        className="button button-6"
                                        style={{
                                            fontSize: "1.1em",
                                            width: "100%",
                                        }}
                                    >
                                        <FiCheck />
                                        &emsp;SAVE CHANGES
                                    </button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </form>
        </div>
    );
};
export default FirmDetails;
