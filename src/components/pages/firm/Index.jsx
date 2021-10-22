/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useContext, useEffect } from 'react';
import Context from '../../../context/Context';
import FirmContext from '../../../context/FirmContext';
import FirmServices from '../../../services/FirmServices';
import FirmDetails from './FirmDetails';
import Table from './Table';

const Index = () => {

    const context = useContext(Context);
    const firmContext = useContext(FirmContext);
    let firmServices = new FirmServices();

    useEffect(() => {
        getCountries(context.token);
        getCurrencies(context.token);
        getPackages(context.token);
        getIntegrators(context.token);
    }, []);

    const getCountries = (_token) => {
        firmServices
            .getCountries(_token)
            .then((response) => {
                firmContext.funcHandleSetCountries(response.data.countries);
            })
            .catch(() => console.warn("Error: Countries"));
    };

    const getCurrencies = (_token) => {
        firmServices
            .getCurrencies(_token)
            .then((response) => {
                firmContext.funcHandleSetCurrencies(response.data.currencies);
            })
            .catch(() => console.warn("Error: Currencies"));
    };

    const getPackages = (_token) => {
        firmServices
            .getPackages(_token)
            .then((response) => {
                firmContext.funcHandleSetPackages(response.data.packages);
            })
            .catch(() => console.warn("Error: Packages"));
    };

    const getIntegrators = (_token) => {
        firmServices
            .getIntegrators(_token)
            .then((response) => {
                firmContext.funcHandleSetIntegrators(response.data.firms);
            })
            .catch(() => console.warn("Error: Integrators"));
    };

    return (
        <div id="firms">
            {
                firmContext.tableOrDetails == 0
                    ? <Table />
                    : <FirmDetails />
            }
        </div>
    )
}
export default Index