import React, { useState } from 'react';
import FirmContext from './FirmContext';

const FirmProvider = props => {

    const [tableOrDetails, setTableOrDetails] = useState(0); // 0 => List, 1 => Details Page
    const [firm, setFirm] = useState({});
    const [countries, setCountries] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    const [packages, setPackages] = useState([]);
    const [integrators, setIntegrators] = useState([]);
    const [filterName, setFilterName] = useState(undefined);
    const [filterPackage, setFilterPackage] = useState(undefined);
    const [filterPayment, setFilterPayment] = useState(undefined);
    const [filterActive, setFilterActive] = useState(undefined);

    return (
        <FirmContext.Provider
            value={{
                tableOrDetails,
                firm,
                countries,
                currencies,
                packages,
                integrators,
                filterName,
                filterPackage,
                filterPayment,
                filterActive,
                funcHandleSetTableOrDetails: (_page) => setTableOrDetails(_page),
                funcHandleSetSelectedFirm: (_firm) => setFirm(_firm),
                funcHandleSetCountries: (_countries) => setCountries(_countries),
                funcHandleSetCurrencies: (_currencies) => setCurrencies(_currencies),
                funcHandleSetPackages: (_packages) => setPackages(_packages),
                funcHandleSetIntegrators: (_integrators) => setIntegrators(_integrators),
                funcHandleSetFilterName: (_filterName) => setFilterName(_filterName),
                funcHandleSetFilterPackage: (_filterPackage) => setFilterPackage(_filterPackage),
                funcHandleSetFilterPayment: (_filterPayment) => setFilterPayment(_filterPayment), 
                funcHanleSetFilterActive: (_filterActive) => setFilterActive(_filterActive)
            }}
        >
            {props.children}
        </FirmContext.Provider>
    );
}
export default FirmProvider;