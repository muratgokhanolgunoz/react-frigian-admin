import axios from "axios";

export const getHelpList = async () => {
    return await axios.get(process.env.REACT_APP_API_URL + "getHelpRtfList");
};

export const downloadFile = async (_fileName) => {
    return await axios.get(
        process.env.REACT_APP_API_URL + "getHelpRtfFile/" + _fileName
    );
};

export const uploadFile = async (_formdata) => {
    return await axios.post(process.env.REACT_APP_API_URL + "updateHelpFile");
};
