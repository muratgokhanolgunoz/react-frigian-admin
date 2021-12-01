import axios from "axios";

export const getFirmList = () => {
    return axios.get(process.env.REACT_APP_API_URL + "getAdminMapInfo");
};

export const getHardwareUsage = () => {
    return axios.get(process.env.REACT_APP_API_URL + "getServerStatus");
};
