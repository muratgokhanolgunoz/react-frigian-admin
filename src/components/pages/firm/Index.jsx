/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Context from "../../../context/Context";
import FirmContext from "../../../context/FirmContext";
import {
    getCountries,
    getCurrencies,
    getPackages,
    getIntegrators,
} from "../../../services/FirmServices";
import FirmDetails from "./FirmDetails";
import Table from "./Table";

const Index = () => {
    const context = useContext(Context);
    const firmContext = useContext(FirmContext);

    useEffect(() => {
        getCountriesList(context.token);
        getCurrenciesList(context.token);
        getPackagesList(context.token);
        getIntegratorsList(context.token);
    }, []);

    const getCountriesList = (_token) => {
        getCountries(_token)
            .then((response) => {
                firmContext.funcHandleSetCountries(response.data.countries);
            })
            .catch(() => console.warn("Error: Countries"));
    };

    const getCurrenciesList = (_token) => {
        getCurrencies(_token)
            .then((response) => {
                firmContext.funcHandleSetCurrencies(response.data.currencies);
            })
            .catch(() => console.warn("Error: Currencies"));
    };

    const getPackagesList = (_token) => {
        getPackages(_token)
            .then((response) => {
                firmContext.funcHandleSetPackages(response.data.packages);
            })
            .catch(() => console.warn("Error: Packages"));
    };

    const getIntegratorsList = (_token) => {
        getIntegrators(_token)
            .then((response) => {
                firmContext.funcHandleSetIntegrators(response.data.firms);
            })
            .catch(() => console.warn("Error: Integrators"));
    };

    return (
        <div className="firms">
            {firmContext.tableOrDetails === 0 ? <Table /> : <FirmDetails />}
        </div>
    );
};
export default Index;
