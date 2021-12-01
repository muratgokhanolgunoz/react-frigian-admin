import axios from "axios";

export const authenticate = (_data) => {
    return axios.post(
        process.env.REACT_APP_API_AUTH_URL + "authenticate",
        _data
    );
};
