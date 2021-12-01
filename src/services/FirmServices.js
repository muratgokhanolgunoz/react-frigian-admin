import axios from "axios";

export const getFirmList = (_token) => {
    return axios.get(process.env.REACT_APP_API_URL + "getFirmList", {
        headers: {
            Authorization: `Bearer ${_token}`,
        },
    });
};

export const getCountries = (_token) => {
    return axios.get(process.env.REACT_APP_API_URL + "countries", {
        headers: {
            Authorization: `Bearer ${_token}`,
        },
    });
};

export const getIntegrators = (_token) => {
    return axios.get(process.env.REACT_APP_API_URL + "getIntegrators", {
        headers: {
            Authorization: `Bearer ${_token}`,
        },
    });
};

export const getPackages = (_token) => {
    return axios.get(process.env.REACT_APP_API_URL + "getPackages", {
        headers: {
            Authorization: `Bearer ${_token}`,
        },
    });
};

export const getCurrencies = (_token) => {
    return axios.get(process.env.REACT_APP_API_URL + "allCurrencies", {
        headers: {
            Authorization: `Bearer ${_token}`,
        },
    });
};

export const getLogo = (_token, _firmId) => {
    return axios.get(process.env.REACT_APP_API_URL + "getFirmLogo/" + _firmId, {
        headers: {
            Authorization: `Bearer ${_token}`,
        },
    });
};

export const updateLogo = (_token, _data) => {
    return axios.post(process.env.REACT_APP_API_URL + "updateFirmLogo", _data, {
        headers: {
            Authorization: `Bearer ${_token}`,
        },
    });
};

export const updateFirm = (_token, _data) => {
    return axios.post(process.env.REACT_APP_API_URL + "updateFirm", _data, {
        headers: {
            Authorization: `Bearer ${_token}`,
        },
    });
};
